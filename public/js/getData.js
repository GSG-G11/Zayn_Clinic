const deletePatient = (id) => {
  console.log(id);
  return fetch(`/delete-patient/${id}`, {
    method: 'delete',
  });
};
fetch('/patients')
  .then((res) => res.json())
  .then((patients) => {
    const container = document.querySelector('#container');
    patients.forEach((patient) => {
      const patientRow = document.createElement('dev');
      patientRow.setAttribute('class', 'patient-row');

      const patientName = document.createElement('p');
      patientName.textContent = patient.patient_name;

      const patientAge = document.createElement('p');
      patientAge.textContent = patient.age;

      const date = document.createElement('p');
      date.textContent = patient.booking_date;

      const deleteBtn = document.createElement('input');

      deleteBtn.setAttribute('class', 'delete-btn');
      deleteBtn.setAttribute('type', 'submit');
      deleteBtn.setAttribute('name', 'userID');
      deleteBtn.setAttribute('value', 'delete');
      deleteBtn.setAttribute('id', patient.patient_id);

      patientRow.appendChild(patientName);
      patientRow.appendChild(patientAge);
      patientRow.appendChild(date);
      patientRow.appendChild(deleteBtn);
      container.appendChild(patientRow);

      deleteBtn.onclick = (e) => {
        deletePatient(e.target.id);
        container.removeChild(patientRow);
      };
    });
  });
