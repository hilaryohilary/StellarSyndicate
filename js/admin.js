function select(tag) {
    return document.querySelector(tag)
};

const collectionName =select('#collectionName');
const collectionConcept = select('#collectionConcept');
const submitCollection = select('#submitCollection');
const blockchain = select('#blockchain');
const img = select('#myImg');
const adminlogin = select('#login');

Moralis.initialize("zvmVYvSHoVfn1OnKnqidXLBh9EcuvpCjcbCkD2pO");
Moralis.serverURL = "https://amdykbspludj.moralishost.com:2053/server";

init = async () => window.web3 = await Moralis.Web3.enable();

login = async () => {
    await Moralis.Web3.authenticate();
    alert('Admin is logged in!');
}


saveCollectionData = async () => {

    const homeCollections = Moralis.Object.extend('homeCollections');
    const homeCollection = new homeCollections();
    homeCollection.set('collection_name', collectionName.value);
    homeCollection.set('collection_concept', collectionConcept.value);
    homeCollection.set('blockchain', blockchain.value);
    const fileUploadControl = document.getElementById('collectionTemplateImgUpload');

    if(fileUploadControl.files.length > 0) {

        const file = fileUploadControl.files[0];
        const name = "collection-temp-img.jpg";
        const collectionTemplateImage = new Moralis.File(name, file);
        homeCollection.set('collection_temp_img', collectionTemplateImage);
        homeCollection.set('img_url', collectionTemplateImage._url);
    }
    await homeCollection.save();
    return homeCollection;

}


function showImg ()  {  
let img = document.querySelector('img');
let inputs = document.querySelectorAll('input[type="file"]');
inputs.forEach( input => {
    input.addEventListener('change', function () {
        if(this.files[0].type != 'image/jpeg' && this.files[0].type != 'image/png' && this.files[0].type != 'image/gif'){
            alert('sorry you have to upload an image');
        } else {
            img.src = URL.createObjectURL(this.files[0]);
        };
    });
});
}

showImg();


submitCollection.addEventListener('click', saveCollectionData);  

adminlogin.addEventListener('click', login);