BEGIN;
DROP TABLE IF EXISTS booking, patient CASCADE;

CREATE TABLE booking (
    patient_id SERIAL  PRIMARY KEY,
    patient_name VARCHAR (100) NOT NULL,
    age INT NOT NULL,
    Booking_Date DATE NOT NULL
);

CREATE TABLE Patient (
    ID SERIAL PRIMARY KEY,
    IllnessName INT NOT NULL,
    FOREIGN KEY (ID) REFERENCES booking(patient_id)
);


INSERT INTO booking(patient_name,age, Booking_Date ) VALUES ('Monther', 22, '2022-03-01');

COMMIT;