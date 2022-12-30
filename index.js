const textareaEl=document.getElementById("textarea")
const total_counterEl=document.getElementById('total_count');
const remEl=document.getElementById('Rem')
//textareaEl.getAttribute('maxLength')
textareaEl.addEventListener("keyup",()=>{
    updatecounter()
})


function updatecounter()
{
    total_counterEl.innerText=textareaEl.value.length
    remEl.innerHTML=textareaEl.getAttribute('maxLength')-textareaEl.value.length;
}
