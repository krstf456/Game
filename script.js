 let enterPlace = confirm('You are about to leave the house in the middle of the zombie apocalypse, are you sure about that?');
 
 if(enterPlace == true) {
    let itemChoice = prompt('You are about to leave the house, now you should choose an item that you take with you. Either knife, kebabrulle or flashlight. ');
    
    if(itemChoice == 'knife') {
        alert("This might not be the best weapon against a zombie, they are already dead you know. A knife won't help you survive this");
    }
    else if(itemChoice == 'flashlight') {
        alert('Thats totally unnecessary, zombies will find you at the moment when you use it.');
    }
    else if(itemChoice == 'kebabrulle') {
        alert('Kebabrulle, hmm intresting choice. We will see how is it going');
    }
    
        let wayChoice = prompt('You left the house. Which way you want to go now? You can go left, right or forward.');
        if(wayChoice == 'right') {
            if(itemChoice == 'knife') {
                //alert('You just run into a zombie, what do you do? Run away or fight it?');
                let runOrFight = prompt('You just run into a zombie, what do you do? RUN away or FIGHT it?');
                    if(runOrFight == 'RUN') {
                        alert('Congrats you will live for an other 10minutes! Game Over!');
                    }
                    else if(runOrFight == 'FIGHT') {
                        alert('That was pretty obvious, you died. Game Over!');
                    }
            }
            else if(itemChoice == 'flashlight') {
                alert('You just run into a zombie because you choose flashlight you can only run away from him. But in the next 10 minutes you will die either way. Game Over!');
            }
            else if(itemChoice == 'kebabrulle') {
                alert('You just run into a zombie because the zombie is extra sensitive to the kebabrulle smell he is going to be extra fast and will eat you alive. Game Over!');
            }
        }
        if(wayChoice == 'left') {
            if(itemChoice == 'knife') {
                alert('You just run into a big gang of zombies and they ate you alive. Game Over!');
            }
            else if(itemChoice == 'flashlight') {
                alert('You just run into a big gang of zombies and they ate you alive. Game Over!');
            }
            else if(itemChoice == 'kebabrulle') {
                alert('You just run into a big gang of zombies and they ate you alive. Game Over!');
            }
        }
        if(wayChoice == 'forward') {
            if(itemChoice == 'knife') {
                alert('You met an other apocalypse survival, but he sees the weapon in your hand and shoot you in the head because he thinks that you are dangerous. Game Over!');
            }
            else if(itemChoice == 'flashlight') {
                let acceptOrFight = prompt('You met an other apocalypse survival, he wants to trade the flashlight for a TicTac? You can either ACCEPT it or FIGHT him.');
                    if(acceptOrFight == 'ACCEPT') {
                        alert('Now your breath is going to be much better but this is even more useless then the flashlight was. You will die shortly. Game Over!')

                    }
                    else if(acceptOrFight == 'FIGHT') {
                        alert('Well, he was a prepared apocalypse fighter. You didnt stand any chance against him. Game Over!')

                    }

            }
            else if(itemChoice == 'kebabrulle') {
                alert("You met an other apocalypse survival, he wants to trade the flashlight for an AK-47 because he just loves the kebabrulle and can't live without it. You can ACCEPT it or FIGHT him.");
            
            }
        }
}

 else {
     alert('You chose not to leave the house, hopefully you are going to survive on your own. Good luck with that!')
 }