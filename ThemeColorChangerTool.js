function changeValueofcssVariable(cssVariable){
  const style = document.querySelector(`#${cssVariable}`);
  const input = document.querySelector(`#${cssVariable}-input`);
  style.innerHTML ="";
  style.innerHTML = `:root{--${cssVariable}:${input.value} !important;}`;
  
}
function themeColorChanger(cssVarArr){
  if(!cssVarArr){
    return;
  }
  const form = document.createElement('form');
  
  const fragment = new DocumentFragment();
  const fragmentStyle = new DocumentFragment();
  form.style="display:flex;flex-direction:column;position:fixed;top:0%;right:0%;z-index:10000;background:white;padding:10px;outline:1px solid #000;";
  cssVarArr.forEach((cssVariable)=>{
    const label = document.createElement('label');
    const input = document.createElement('input');
    const style = document.createElement('style');
    style.id=`${cssVariable}`;
    input.type="color";
    input.id=`${cssVariable}-input`;
    input.setAttribute('onInput',`changeValueofcssVariable('${cssVariable}')`);
    label.textContent = `--${cssVariable} : `;
    label.append(input);
    fragment.append(label);
    fragmentStyle.append(style);
  })
  form.append(fragment);
  document.head.appendChild(fragmentStyle);
  document.body.appendChild(form);
   
}
