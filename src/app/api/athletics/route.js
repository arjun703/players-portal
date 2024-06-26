import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
});

export  async function GET(request) {

    try {
        const userID = '1234';

        let  query = `SELECT * from press_or_interviews 
            WHERE user_id = '${userID}' AND is_active=1
            ORDER BY created_at DESC
        `;
        const press_or_interviews = await new Promise((resolve, reject) => {
            connection.query(query, (error, results) => {
                if (error) {
                    reject(new Error('Error fetching data from database: ' + error.message));
                } else {
                    resolve(results);
                }
            });
        });

        query = `SELECT * from additional_sports 
            WHERE user_id = '${userID}' AND is_active=1
            ORDER BY created_at DESC
        `;

        const additional_sports = await new Promise((resolve, reject) => {
            connection.query(query, (error, results) => {
                if (error) {
                    reject(new Error('Error fetching data from database: ' + error.message));
                } else {
                    resolve(results);
                }
            });
        });

        query = `SELECT * from training 
            WHERE user_id = '${userID}' AND is_active=1
            ORDER BY created_at DESC
        `;

        const trainings = await new Promise((resolve, reject) => {
            connection.query(query, (error, results) => {
                if (error) {
                    reject(new Error('Error fetching data from database: ' + error.message));
                } else {
                    resolve(results);
                }
            });
        });


        query = `SELECT * from coaches 
            WHERE user_id = '${userID}' AND is_active=1
            ORDER BY created_at DESC
        `;

        const coaches = await new Promise((resolve, reject) => {
            connection.query(query, (error, results) => {
                if (error) {
                    reject(new Error('Error fetching data from database: ' + error.message));
                } else {
                    resolve(results);
                }
            });
        });

        query = `SELECT * from teams 
            WHERE user_id = '${userID}' AND is_active=1
            ORDER BY created_at DESC
        `;

        const teams = await new Promise((resolve, reject) => {
            connection.query(query, (error, results) => {
                if (error) {
                    reject(new Error('Error fetching data from database: ' + error.message));
                } else {
                    resolve(results);
                }
            });
        });



        return new Response(JSON.stringify({ 
                success: true, 
                press_or_interviews: press_or_interviews,
                additional_sports: additional_sports,
                trainings:trainings,
                teams:  teams,
                coaches:coaches
            }), {
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