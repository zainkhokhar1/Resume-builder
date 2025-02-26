
import { Cloudinary } from '@cloudinary/url-gen';
import axios from 'axios';

const ChangeImage = async (img) => {

    const formData = new FormData();
    formData.append('file', img);
    formData.append('upload_preset', 'mycloud');

    let img_url;
    try {
        const response = await axios.post('https://api.cloudinary.com/v1_1/dxbibht1k/image/upload', formData);
        img_url = response.data.url;

        if (img_url) {
            return img_url;
        }
    }
    catch (e) {
        console.log(e.message);
    }

}

export default ChangeImage;