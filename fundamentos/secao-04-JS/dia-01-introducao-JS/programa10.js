let pecaXadrez = 'rei';

switch(pecaXadrez){
    case 'cavalo': console.log('O movimento do cavalo forma um “L”');
break;
case 'peao':console.log ('os peões se movem somente para frente, uma casa por vez');
break;
case 'bispo':console.log ('O bispo se move em uma linha reta diagonalmente no tabuleiro. ');
break;
case 'torre':console.log('A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça');
break;
case 'rainha':console.log('A rainha pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente');
break;
case 'rei':console.log('O rei é a peça mais importante do xadrez. Se o rei for encurralado de modo que sua captura seja inevitável, o jogo termina e o este jogador perde. O rei tem pouca mobilidade, assim ele é considerado também uma das peças mais fracas no jogo. O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente');
break;
default:
    console.log ('peça nao encontrada')
}