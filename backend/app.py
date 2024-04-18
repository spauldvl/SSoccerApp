import psycopg2
import psycopg2.extras
from flask import Flask, request

app = Flask(__name__, static_url_path= '', static_folder='./../frontend/build', template_folder='./../frontend/build')

def connect_to_database():
    try:
        with psycopg2.connect(database="postgres", user="postgres", password="greyson14", host="localhost", port=5432) as connection:
            return connection
    except (psycopg2.DatabaseError, Exception) as error:
        print(error)

# Create table if none exists, requires considering number of columns needed and thier respective datatypes
connection = connect_to_database()
cursor = connection.cursor()
cursor.execute("DROP TABLE IF EXISTS practice_details")
cursor.execute(
    """
    CREATE TABLE practice_details (
        PracticeID SERIAL PRIMARY KEY,
        TrainingType varchar(50) NOT NULL,
        TrainingObjective varchar(200) NOT NULL,
        TrainingDuration int NOT NULL,
        TrainingDate date NOT NULL,
        TrainingTime time NOT NULL,
        Shots int,
        Crosses int,
        Goals int,
        Assists int
    );
    """
    )
# Create sample data to load in once table is created (OPTIONAL)
cursor.execute(
    """
    INSERT INTO practice_details (TrainingType, TrainingObjective, TrainingDuration, TrainingDate, TrainingTime, Shots, Crosses, Goals, Assists)
    VALUES('Team', 'Shooting and finishing', 2, '2024-04-17', '6:30:00', 4, 3, 1, 0);
    """
)

connection.commit()
cursor.close()
connection.close()



# Default route to serve static index file
@app.route('/')
def serve_index():
    return app.send_static_file('index.html')

# Create a route for fetching calendar data
@app.route('/practicedata', methods=["GET"])
def get_practice_data():
    connection = connect_to_database()
    cursor = connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    cursor.execute("SELECT * FROM practice_details;")
    calendar_data = cursor.fetchall()
    cursor.close()
    connection.close()
    return {'data': calendar_data}

# Create a route for adding new data to calender table
@app.route('/practicedata', methods=["PUT"])
def add_practice_data():
    try: 
        data = request.get_json()
        
        connection = connect_to_database()
        cursor = connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
        
        cursor.execute(
            """
            INSERT INTO practice_details (TrainingType, TrainingObjective, TrainingDuration, TrainingDate, TrainingTime, Shots, Crosses, Goals, Assists)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s);
            """,
            (
                data['trainingType'],
                data['trainingObjective'],
                data['duration'],
                data['date'],
                data['time'],
                data.get('shots', None),
                data.get('crosses', None),
                data.get('goals', None),
                data.get('assists', None)
            )
        )
        connection.commit()
        cursor.close()
        connection.close()
    
        return {'status' : 200}
    except (psycopg2.Error, Exception) as e:
        # If an error occurs during database operation, handle the error and return an error message
        print("Error adding practice data:", e)
        return {'status': 500}


def create_app ():
    return app