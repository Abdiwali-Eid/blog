const blogForm= document.getElementById('blog-form');
const blogTitle=document.getElementById('blogTitle');
const blogDesc= document.getElementById('blogDesc');
const blogImg= document.getElementById('blogimage');
const bloglist=document.getElementById('blog-list');

blogForm.addEventListener('submit',addpost)

function addpost(e){
    e.preventDefault();
     
    const titleText=blogTitle.value.trim();
    const imgUrl=blogImg.value.trim();
    const descText=  blogDesc.value.trim();

    if(titleText !=="" && imgUrl !=="" && descText!==""){
        const post={
           id:Date.now(),
           title:titleText,
           image: imgUrl,
           description: descText


        }
        DisplayPost(post)
       
        blogTitle.value='';
    }

   
    console.log(descText);
}
function DisplayPost(post){

    const div= document.createElement('div');
    div.classList.add('blog-item');
    div.dataset.id=post.id;

    div.innerHTML=`
    <img src=${post.image} alt="blog image" class="image">
    <h1 class="title" >${post.title}</h1>
    <p class ="description" >${post.description}</p>
     <button class="delete-btn" >Delet</button>
      <button class="edit-btn" > Edit</button>


    
    `
    bloglist.appendChild(div);
      attachevent(div, post);
} 

function  attachevent(div,post ){
    const deleteBtn=div.querySelector('.delete-btn');
    const updateBtn= div.querySelector('.edit-btn');
    deleteBtn.addEventListener('click',function(){
        div.remove();
    })
    updateBtn.addEventListener('click',function(){
        handleEdit(post, div);
    })

}
function handleEdit(post, div){
    const titleText=div.querySelector('.title');
    const descriptiontext=div.querySelector('.description');
    const imagesrc=div.querySelector('.image');
    //  console.log(titleText.textContent)
     const newtitle=prompt('enter new title', titleText.textContent)
     const newdesc=prompt('enter new description', descriptiontext.textContent)
     const newimage=prompt('enter new image', imagesrc.src)
    
     if(newtitle !== "" && newtitle.trim() !==""){
        titleText.textContent=newtitle;
     }

     if(newdesc !== "" && newdesc.trim() !==""){
        descriptiontext.textContent=newdesc;
     }

     if(newimage !== "" && newimage.trim() !==""){
        imagesrc.src=newimage;
     }


    }
    


