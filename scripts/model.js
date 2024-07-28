export class Model {
    setName(params) {
        const p = document.createElement('p');
        p.textContent = 'Bu, JavaScript kullanılarak oluşturulmuş bir paragraftır.';
        const contentDiv = document.getElementById('app');
        contentDiv.appendChild(p);
         // Yeni bir div elementi oluştur
    const div = document.createElement('div');
    
    // Div elementine çerçeve sınıfı ekle
    div.classList.add('frame');
    
    // Video elementi oluştur
    // const video = document.createElement('video');
    // video.classList.add('video');
    // video.controls = true; // Video kontrol butonlarını ekler
    // video.src = 'path_to_your_video.mp4'; // Videonun kaynağını belirtin
    
    // Video elementini div içine ekle
    // div.appendChild(video);
    
    // Div elementini sayfadaki bir konteynıra ekle
    // const contentDiv = document.getElementById('content');
    contentDiv.appendChild(div);
    }
}
