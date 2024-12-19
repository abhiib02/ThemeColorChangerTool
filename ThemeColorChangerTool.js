function changeValueofcssVariable(cssVariable){
  const style = document.createElement('style');
  const input = document.querySelector(`#${cssVariable}-input`);
  style.id=`${cssVariable}`;
  style.innerHTML = `:root{--${cssVariable}:${input.value};}`;
  document.head.appendChild(style);
}
function themeColorChanger(cssVarArr){
  if(!cssVarArr){
    return;
  }
  const form = document.createElement('form');
  
  const fragment = new DocumentFragment();
  form.style="display:flex;flex-direction:column;position:fixed;top:0%;right:0%;z-index:10000;background:white;padding:10px;outline:1px solid #000;";
  cssVarArr.forEach((cssVariable)=>{
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type="color";
    input.id=`${cssVariable}-input`;
    input.setAttribute('onInput',`changeValueofcssVariable('${cssVariable}')`);
    label.textContent = `--${cssVariable} : `;
    label.append(input);
    fragment.append(label);
  })
  form.append(fragment);
  document.body.appendChild(form);
}
