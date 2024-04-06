export default defineEventHandler(async (event) => {
    const { default: jsonData } = await import('../../assets.json');

    return jsonData
})