export  async function pOSTRequest(formData, endPoint){
    console.log(formData)
    try {
        const response = await fetch(endPoint, {
          method: 'POST',
        
          body: formData,
        });

        const responseJson = response.json()

        if (response.ok) {
            return responseJson
        } else {
            return {success: false, msg: 'Response not OK'};
        }

    } catch (error) {
        return {success: false, msg: response.msg};
    }
   
}

export  async function uPDATErequest(formData, endPoint){

    try {
        const response = await fetch(endPoint, {
          method: 'PUT',
          body: formData,
        });

        const responseJson = response.json()

        if (response.ok) {
            return responseJson
        } else {
            return {success: false, msg: 'Response not OK'};
        }

    } catch (error) {
        return {success: false, msg: response.msg};
    }

}

export  async function dELETErequest(formData, endPoint){

    try {
        const response = await fetch(endPoint, {
          method: 'DELETE',
          body: formData,
        });

        const responseJson = response.json()

        if (response.ok) {
            return responseJson
        } else {
            return {success: false, msg: 'Response not OK'};
        }

    } catch (error) {
        return {success: false, msg: response.msg};
    }
}