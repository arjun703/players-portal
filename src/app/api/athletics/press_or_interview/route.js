import {generateRandomString} from '@/app/api/utils'
import fs from 'fs';
import path from 'path';
import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
});

export  async function POST(request) {

    try {


        const data = await request.formData()

        const pressOrInterviewInfo = data.get('press_or_interview_info')
        
        const id=generateRandomString(20)

        // Save the title and filenames in the MySQL database
        const query = `INSERT INTO press_or_interviews 
            (id, user_id, info) 
            VALUES 
            ('${id}', '1234',  '${pressOrInterviewInfo}')
        `;
        
        connection.query(query, (error, results) => {
            if (error) {
                throw new Error('Error inserting data into database- '+ error.message);
            } 
        });

        return new Response(JSON.stringify({ success: true, press_or_interview: {
            id: id, info: pressOrInterviewInfo
        }}), {
            headers: {
                "Content-Type": "application/json"
            },
            status: 201
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



export  async function PUT(request) {

    try {

        const data = await request.formData()

        const pressOrInterview = JSON.parse(data.get('press_or_interview'))

        const id = pressOrInterview.id
        const pressOrInterviewInfo = pressOrInterview.info

        // Save the title and filenames in the MySQL database
        const query = `UPDATE  press_or_interviews 
            SET info = '${JSON.stringify(pressOrInterviewInfo)}' 
            WHERE id = '${id}'
        `;
        
        connection.query(query, (error, results) => {
            if (error) {
                throw new Error('Error inserting data into database- '+ error.message);
            } 
        });

        return new Response(JSON.stringify({ success: true, press_or_interview: {
            id: id, info: pressOrInterviewInfo
        }}), {
            headers: {
                "Content-Type": "application/json"
            },
            status: 201
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


export async function DELETE(request) {


    try {
        const userID = '1234';
        const data = await request.formData()
        const press_or_interview_id = data.get('press_or_interview_id')
        // Save the title and filenames in the MySQL database
        const query = `UPDATE  press_or_interviews 
            SET is_active = 0 
            WHERE id = '${press_or_interview_id}' AND user_id='${userID}'
        `;

        const result = await new Promise((resolve, reject) => {
            connection.query(query, (error, results) => {
                if (error) {
                    reject(new Error('Error deleting the video: ' + error.message));
                } else {
                    resolve(results);
                }
            });
        });

        const successStatus  = result.affectedRows > 0

        return new Response(JSON.stringify({ success: successStatus, press_or_interview_id: press_or_interview_id }), {
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