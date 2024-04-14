import mysql from 'mysql';
console.log("below are db creds")
console.log(process.env.HOST)
console.log(process.env.USER)
console.log(process.env.DB)
console.log(process.env.PASS)
console.log("above are db creds ")

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
});

export  async function GET(request) {

    try {
        const userID = '1234';
        // Save the title and filenames in the MySQL database
        const query = `SELECT * from videos 
            WHERE user_id = '${userID}' AND is_active=1
            ORDER BY created_at DESC
        `;
        const videos = await new Promise((resolve, reject) => {
            connection.query(query, (error, results) => {
                if (error) {
                    reject(new Error('Error fetching data from database: ' + error.message));
                } else {
                    resolve(results);
                }
            });
        });

        return new Response(JSON.stringify({ success: true, videos: videos }), {
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


export async function DELETE(request) {

    try {
        const userID = '1234';
        const data = await request.formData()
        const video_id = data.get('video_id')
        // Save the title and filenames in the MySQL database
        const query = `UPDATE  videos 
            SET is_active = 0 
            WHERE id = '${video_id}' AND user_id='${userID}'
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

        return new Response(JSON.stringify({ success: successStatus, video_id: video_id }), {
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

