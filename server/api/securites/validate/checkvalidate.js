export default defineEventHandler(async (event) => {
    try {
        const { default: jsonData } = await import('../../../assets.json')
        const { name } = await readBody(event)

        const findName = jsonData.find(item => item.name.toLowerCase() === name.toLowerCase())

        return findName
    }
    catch (error) {
        console.log(error)
    }
})