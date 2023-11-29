window.addEventListener('load', function () {
  //ESCRIBE TODO EL CODIGO AQUÍ ADENTRO   
  console.log('Hola mundo');



  //Trabajando con el DOM
  //ROOT
  console.log('--root--');
  console.log(document.documentElement);

  //head
  console.log('--head--');
  console.log(document.head);


  //body
  console.log('--body--');
  console.log(document.body);



  //HTMLCollection

  console.log('--HTMLCollection--');

  const collection = this.document.body.children
  console.log(collection);



  for (const value of collection) {
    console.log(value)
  }

  /**
   * un HTMLCollection me permite iterar 👌
   * No pueden aplicar metodos para array ❌
   */

  //HTMLCollection -> A array (conversion)

  console.log('--HTMLCollection -> A array (conversión)--');

  const htmlArray = Array.from(collection)
  console.log(htmlArray);


  console.log('--acceder al primer elemento--');
  console.log(htmlArray[1]); //<footer>🅰️ Hecho con amor - Gabriel Martinez ❤️🅰️</footer>




  //Metodos para buscar elementos

  console.log('//Metodos para buscar elementos');

  const rootElemnent = this.document.getElementById('root')
  console.log(rootElemnent);
  // En caso que se encuentre me dara el elemento con esa referencia, caso contrario sera null. 

  console.log(this.document.getElementsByClassName('subtitulo'));
  //HTMLCollection

  console.log(this.document.getElementsByClassName('subtitulo')[0]);



  console.log(this.document.getElementsByTagName('a')[0]);
  //en caso de que se encuentre la etiqueta, tendre nada mas que un htmlcollection con todos los elementos, caso contrario tendre un htmlcollection vacio. 

  console.log(this.document.querySelector('.subtitulo'));
  console.log(this.document.querySelector('h1'));
  console.log(this.document.querySelector('#root'));
  console.log(this.document.querySelector('a')); // nos trae el primero que encunetra/ 

  console.log(this.document.querySelectorAll('a')[1]);// Nodelist

  const array2 = Array.from(this.document.querySelectorAll('a'))
  console.log(array2);


  //inner.HTML
  //textContent


  let frutas = ['mango', 'pera', 'coco', 'banano', 'platano', 'sandia', 'mandarina']

  // console.log(frutas);

  const contenedor = this.document.querySelector('#contenedor')

  if (contenedor) {
    console.log(contenedor);
    for (const fruta of frutas) {

      contenedor.innerHTML += `<li>  ${fruta} </li>`
    }
  } else {
    console.log('No se encontro');

  }


  console.log(this.document.querySelector('#a'));

  // comprobar si existe 
  console.log(this.document.querySelector('#a').hasAttribute('target')); //true

  //obtener el valor

  console.log(this.document.querySelector('#a').getAttribute('target'));


  //obtener TODOS los atributos
  console.log(this.document.querySelector('#a').attributes);

  //remove attribute
  console.log(this.document.querySelector('#a').removeAttribute('target'));

})