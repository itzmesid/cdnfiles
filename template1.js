
export const htmlTemplate = (data) =>  `
    
    <div class="amfm__modal">
        <div class="amfm__signUp">
            <div class="amfm__signUp_wrap">
                <div class="amfm__signUp_title">${data.competitionName}</div>
                <div class="amfm__signUp_desc">${data.competitionName}</div>
<input type='text' />
                <button class="amfm__signUp_btn" onclick="abc();">${data.label.participate_btn}</button>
                <div class="amfm__signup_avatar"></div>
            </div>
        </div>
    <style>.amfm__modal{bottom:50px;left:0}.amfm__signUp{width:400px;height:150px;padding:0 150px 0 50px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;color:#333;font-size:10px;background-color:#ffad00;border-radius:0 75px 75px 0;transform:translateX(-25%);transition:.25s cubic-bezier(.25,.46,.45,.94)}:host([opened]) .amfm__signUp{transform:translateX(0)}.amfm__signUp_desc{font-size:1.7em;font-weight:700;line-height:1.2;margin-bottom:.75em;padding-right:2em}.amfm__signUp_btn{padding:0 30px;border-radius:2.2em;border:none;outline:0;cursor:pointer;color:rgba(255,255,255,.75);font-size:1.2em;line-height:3.4;text-transform:uppercase;background-color:#a41111;-webkit-appearance:none;transition:.18s}.amfm__signUp_btn:hover{padding:0 40px;box-shadow:0 0 0 3px #fff}.amfm_signUp_points{position:absolute;top:50%;right:30px;width:90px;height:90px;margin-top:-45px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#ffad00;font-size:2.6em;font-weight:700;background:#fff;border-radius:50%;box-shadow:0 0 0 1px currentcolor,0 0 0 8px #fff;transform:rotate(0) translate(0,0);transition:.2s}.amfm__signUp_btn:hover+.amfm_signUp_points{transform:rotate(-360deg) translate(0,0)}.amfm_signUp_points small{font-size:54%;font-weight:400} </style>
 
 `;

export const jsFuntions = `
var clickHandler=function(e){ 
        if (e.hasAttribute("opened")) {
            e.removeAttribute("opened");
        } 
}

var abc=function(){  fetch("./data.json", {
            method: "post",
         body : 'name=jay' 
        }).then((response) => {
            return response.json();
        }).then(data => {
            
            console.log(data);
            
        }).catch((err) => {
            console.log(err);
        }); }

`;