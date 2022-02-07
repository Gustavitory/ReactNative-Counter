# Flex
De esta seccion puedo concluir que el valor del flex determina que tanto tomara del espacio del padre 
cuando existan otros elementos dentro de el que tambien sean flex, entre mayor sea el valor
mayor sera la seccion que tomara proporcionalmente segun los valores de los demas, es
totalmente a escala del espacio disponible.
La ecuacion:
tenemos el flex 1, el flex 2 y el flex 3
en total nos da 1+2+3=6

entonces el flex 1 sera igual a:
    supongamos que estamos en column y que el heigh de nuestro padre es HP

    entonces el height del primero seria igual a : HP*(1/6)=HP*0,16=> esto sera igual al 16% de HP
    el del segundo: HP*(2/6) =HP*0,33=> esto es igual al 33% de HP
    el tercero: HP*(3/6)=HP*0,5=esto es igual al 50% de HP


## Flex-direction:
Solo hay 4 valores disponibles y determina si los elementos iran en fila o columna.
Valores disponibles:

    column(por defecto), inverse-column(como column pero ordena los elementos inversamente).

    row(Va en direccion horizontal), inverse-row(como row pero ordena los elementos inversamente).


## Justify-content:
Determina si los elementos dentro del flex van a estar alineados al inicio o final (arriba o abajo) del padre,
ademas determina tambien la distancia que existira entra cada elemento entre ellos y con respecto al padre.
Valores disponibles:
    flex-start(por defecto):al inicio seria arriba y a la izquierda.

    flex-end:al final seria abajo y a la izquierda.

    center:justo en la distancia media entre inicio y fin.

    space-between: Distribuye de manera uniforme a los hijos desde el inicio hasta el final.

    space-around: Distribuye de manera unifome a los hijos teniendo una pequeña distancia tambien con
        el inicio y fin del padre.

    space-evenly: Distribuye de manera uniforme a los hijos teniendo la misma distancia entre inicio y
        fin que la que hay entre cada uno de los hijos.

## Align-item:
Ubica los elementos horizontalmente al inicio(izquierda) al centro o al final (derecha), como dato
extra, si el elemento no tiene un width definido solo sera visible en stretch que es uno de los valores
posibles.(Tener en cuenta de que el inicio puede ser izquierda o dereca dependiendo del flex direction)
Valores disponibles:
    stretch: El elemento se situa al lado izquierdo y se estira todo lo posible hacia el lado derecho,
    si el elemento no tiene width definido se estirará hasta cubrir el espacio disponible.

    flex-start: El elemento se situal al lado izquierdo, si el elemento no tiene un width definido este sera definido a cero y por lo tanto no sera visible, para evitar esto se puede configurar un minWidth en las props de sus estilos.

    flex-end:El elemento se situal al lado derecho, si el elemento no tiene un width definido este sera definido a cero y por lo tanto no sera visible, para evitar esto se puede configurar un minWidth en las props de sus estilos.

    center:El elemento se situal al centro, si el elemento no tiene un width definido este sera definido a cero y por lo tanto no sera visible, para evitar esto se puede configurar un minWidth en las props de sus estilos.

    baseline: igual al flexstart solo que se puede configurar cual sera el inicio en donde se alinearan todos (es poco usado).

## Align-self:
Funciona igual al align-item solo que funciona para cada hijo, entonces pordemos personalizar cada uno individualmente, obviamente si tengo ya un align items predeterminado en el padre afectara a todos los que no tengan un alignself configurado.

