


document.getElementById('seven').addEventListener('click',function(){
    displayNumber('seven')
})
document.getElementById('nine').addEventListener('click',function(){
    displayNumber('nine')
})
document.getElementById('eight').addEventListener('click',function(){
    displayNumber('eight')
})
document.getElementById('six').addEventListener('click',function(){
    displayNumber('six')
})
document.getElementById('five').addEventListener('click',function(){
    displayNumber('five')
})
document.getElementById('four').addEventListener('click',function(){
    displayNumber('four')
})
document.getElementById('three').addEventListener('click',function(){
    displayNumber('three')
})
document.getElementById('two').addEventListener('click',function(){
    displayNumber('two')
})
document.getElementById('one').addEventListener('click',function(){
    displayNumber('one')
})
document.getElementById('zero').addEventListener('click',function(){
    displayNumber('zero')
})
document.getElementById('sum').addEventListener('click',function(){
    displayString('sum')
})
document.getElementById('minus').addEventListener('click',function(){
    displayString('minus')
})
document.getElementById('divide').addEventListener('click',function(){
    displayString('divide')
})
document.getElementById('multi').addEventListener('click',function(){
    displayString('multi')
})
document.getElementById('point').addEventListener('click',function(){
    displayString('point')
})
const displayString = (id) =>{
    const value = document.getElementById(id).innerText;
    display(value)
}
const displayNumber = (id) =>{
        const value = parseInt(document.getElementById(id).innerText)
        display(value)
    }
const display = (value) =>{
    const field = document.getElementById('input-field');
    field.value = field.value + value
}
document.getElementById('equal').addEventListener('click',function(){
    const field = document.getElementById('input-field')
    if(field.value == ''){
        field.value = ''
    }
    else{
        let answer = eval(field.value);
        field.value =answer.toFixed(2)
    }
})
document.getElementById('clear').addEventListener('click',function(){
    const field =document.getElementById('input-field')
    field.value = ''
})