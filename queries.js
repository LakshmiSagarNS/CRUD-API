const getdata = "SELECT * FROM student";
const getDataById = "SELECT * FROM student WHERE ID=$1";
const checkIdExists = "SELECT s FROM student s WHERE s.id=$1";
const addData = "INSERT INTO student(id,name,sem) VALUES ($1,$2,$3)";
const removeData ="DELETE FROM student WHERE id=$1";
const updateData = "UPDATE student SET sem=$1,name=$2 WHERE id=$3";
module.exports = {
    getdata,
    getDataById,
    checkIdExists,
    addData,
    removeData,
    updateData,
};