import psycopg2
from flask import Flask

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
cursor.execute(
    """
    CREATE TABLE practice_details (
        PracticeID int PRIMARY KEY,
        TrainingType varchar(50),
        TrainingObjective varchar(200),
        TrainingDuration int,
        TrainingDate date,
        TrainingTime time,
        Shots int NULL,
        Crosses int NULL,
        Goals int NULL,
        Assists int NULL
    );
    """
    )
connection.commit()
cursor.close()
connection.close()
# Create sample data to load in once table is created (OPTIONAL)

# Default route to serve static index file
@app.route('/')
def serve_index():
    return app.send_static_file('index.html')

# Create a route for fetching calendar data

# Create a route for adding new data to calender table

def create_app ():
    return app