import {generateRandomString, isValidUrl} from '@/app/api/utils'
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

        const title = data.get('title')
        const youtubeVideoURL = data.get('video_url')

        if(title.trim().length === 0){
            throw new Error('Error - Title can\'t be empty') 
        }

        if(!isValidUrl(youtubeVideoURL)){
            throw new Error('Error - Invalid URL provided')
        }

        const id=generateRandomString(20)
        const thumbnail_src = ''
        // Save the title and filenames in the MySQL database
        const query = `INSERT INTO videos 
            (id, title, thumbnail_src, video_src, type, user_id) 
            VALUES 
            ('${id}', '${title}', '', '${youtubeVideoURL}', 'youtube', '1234')
        `;
        
        connection.query(query, (error, results) => {
            if (error) {
                throw new Error('Error inserting data into database- '+ error.message);
            } 
        });

        return new Response(JSON.stringify({ success: true, video: {
            id: id, title: title, thumbnail_src: thumbnail_src, video_src: youtubeVideoURL, type: 'youtube'
        } }), {
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