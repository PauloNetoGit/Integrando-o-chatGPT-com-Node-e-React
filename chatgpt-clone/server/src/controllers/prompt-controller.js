const inputPrompt = require("../models/input-prompt")
const openai = require("../config/openAi")

module.exports = {
    async sendText(req, res){
        const openaiAPI = openai.configuration()
        const inputModel = new inputPrompt(req.body)

        try {
            const response = await openaiAPI.createCompletion(
                openai.textCompletion(inputModel)
            ) 
            return res.status(200).json({
                sucess:true,
                data: response.data.choices[0].text
            })
        } catch (error) {
            return res.status(400).json({
                sucess: false,
                // if "error.response" has a response, the "error.data" message will be displayed.
                // otherwise, the written message will be displayed
                error: error.response ? error.data : "there was an inssue on the server"
            })
        }
    }
}