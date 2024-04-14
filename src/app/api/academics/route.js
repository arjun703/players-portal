import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
});

export  async function GET(request) {

    await  new Promise((resolve, reject)=> setTimeout(()=> resolve(), 1000))

    try {
        const userID = '1234';

        let  query = `SELECT * from educations 
            WHERE user_id = '${userID}' AND is_active=1
            ORDER BY created_at DESC
        `;
        const educations = await new Promise((resolve, reject) => {
            connection.query(query, (error, results) => {
                if (error) {
                    reject(new Error('Error fetching data from database: ' + error.message));
                } else {
                    resolve(results);
                }
            });
        });

        query = `SELECT * from academic_files 
            WHERE user_id = '${userID}' AND is_active=1
            ORDER BY created_at DESC
        `;
        const academicFiles = await new Promise((resolve, reject) => {
            connection.query(query, (error, results) => {
                if (error) {
                    reject(new Error('Error fetching data from database: ' + error.message));
                } else {
                    resolve(results);
                }
            });
        });

        return new Response(JSON.stringify({ success: true, educations: educations, academicFiles: academicFiles }), {
            headers: {
                "Content-Type": "application/json"
            },
            status: 200
        });

    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ success: false, msg: error.message  }), {
            headers: {
                "Content-Type": "application/json"
            },
            status: 200
        });
    }
}