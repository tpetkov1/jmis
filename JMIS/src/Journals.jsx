import React from 'react'
import Background from './assets/backdrop.png'

function Home() {
    console.log('Home component rendered');
    return (
        <div>
            <div className="w3-display-container w3-center w3-padding-0">
                <img 
                    src={Background} 
                    style={{
                        marginLeft: "calc(-50vw + 50%)", 
                        marginRight: "calc(-50vw + 50%)",
                        width: "100vw",
                        maxWidth: "100vw"
                    }} 
                    alt="Background"
                />
                <div className='w3-display-middle'>
                    <h1 style={{textDecoration: "underline", textDecorationStyle: "dotted", color: "white"}}>
                        <b>Genocide</b> is a political term.
                    </h1>
                </div>
            </div>
            <div className='w3-container w3-center w3-padding-24'>
                <h1><b>Digital Journals</b></h1>
                <h2 style={{color: "gray", margin: "0px"}}><i>Downloadable in PDF and EPUB</i></h2>
                <hr style={{width: "50%", marginRight: "auto", marginLeft: "auto"}} />
            </div>
            <div className='w3-container'>
                <p style={{width: "75%", marginRight: "auto", marginLeft: "auto"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a erat. Faucibus ornare suspendisse sed nisi. Eu tincidunt tortor aliquam nulla. Magnis dis parturient montes nascetur ridiculus. Volutpat est velit egestas dui id ornare arcu odio ut. Ut lectus arcu bibendum at varius. Pellentesque nec nam aliquam sem et tortor. Sed nisi lacus sed viverra tellus in hac habitasse platea. Morbi tristique senectus et netus et malesuada fames. Varius morbi enim nunc faucibus. Aliquam malesuada bibendum arcu vitae elementum curabitur. Arcu cursus vitae congue mauris rhoncus. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Sed vulputate mi sit amet. Scelerisque purus semper eget duis. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Ultricies leo integer malesuada nunc vel risus commodo. Adipiscing elit duis tristique sollicitudin nibh sit.

                    Placerat orci nulla pellentesque dignissim. Leo in vitae turpis massa sed elementum tempus egestas. Consectetur lorem donec massa sapien faucibus. Nunc sed velit dignissim sodales ut eu. Ut placerat orci nulla pellentesque. Non arcu risus quis varius quam quisque id diam vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. At in tellus integer feugiat. Neque volutpat ac tincidunt vitae semper quis. Sed arcu non odio euismod lacinia at. Tellus at urna condimentum mattis pellentesque id nibh tortor. Amet venenatis urna cursus eget nunc. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo.

                    Sed adipiscing diam donec adipiscing tristique risus. Dictum non consectetur a erat nam at lectus urna duis. Posuere urna nec tincidunt praesent semper feugiat nibh. Nibh nisl condimentum id venenatis. Nullam vehicula ipsum a arcu cursus vitae congue. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Convallis convallis tellus id interdum velit laoreet id donec. Phasellus egestas tellus rutrum tellus pellentesque. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Enim praesent elementum facilisis leo. Habitant morbi tristique senectus et netus et malesuada fames.

                    Sagittis orci a scelerisque purus semper eget duis at. Felis eget nunc lobortis mattis aliquam faucibus purus. Aenean vel elit scelerisque mauris pellentesque. At volutpat diam ut venenatis tellus in metus. Sit amet luctus venenatis lectus magna fringilla urna. Ultrices tincidunt arcu non sodales neque sodales ut etiam. Sit amet nulla facilisi morbi. Augue neque gravida in fermentum et sollicitudin ac orci. Proin fermentum leo vel orci porta non. Leo urna molestie at elementum eu. Lorem mollis aliquam ut porttitor leo a. Tortor at auctor urna nunc id. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Ut aliquam purus sit amet luctus venenatis lectus magna. Neque ornare aenean euismod elementum nisi quis. Pharetra et ultrices neque ornare aenean. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Turpis egestas sed tempus urna.

                    Eget nullam non nisi est sit amet facilisis magna. Nibh cras pulvinar mattis nunc. Est velit egestas dui id ornare arcu odio. Neque ornare aenean euismod elementum nisi quis eleifend quam. Et sollicitudin ac orci phasellus egestas tellus. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nunc scelerisque viverra mauris in aliquam sem fringilla. Nulla facilisi etiam dignissim diam quis enim. Nec dui nunc mattis enim. Magna eget est lorem ipsum dolor sit amet consectetur. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Dapibus ultrices in iaculis nunc sed augue lacus. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Ultrices mi tempus imperdiet nulla. Sed sed risus pretium quam vulputate. Blandit libero volutpat sed cras ornare. Vel eros donec ac odio tempor orci. Malesuada fames ac turpis egestas maecenas pharetra convallis. Amet justo donec enim diam vulputate ut pharetra sit amet. Nibh tortor id aliquet lectus proin nibh nisl condimentum id.</p>
            </div>
        </div>
    )
}

export default Home;