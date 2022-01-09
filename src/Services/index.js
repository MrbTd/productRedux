import axios from 'axios';
const url = "https://api-prod.app-zip.com/api/articles/categorie/66"
export const getProductCategory = async () => {
    const result = await axios.get(url)
    return result.data
}