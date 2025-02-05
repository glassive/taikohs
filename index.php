<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico">
    <script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
    <title>Hitsound Previewer</title>
    <meta content="osu!taiko Hitsound Previewer" property="og:title" />
    <meta content="try it out NOW" property="og:description" />
    <meta content="https://glassive.untone.uk/taikohs" property="og:url" />
    <!-- <meta content="https://embed.com/embedimage.png" property="og:image" /> -->
    <meta content="#3DF5B1" data-react-helmet="true" name="theme-color" />
</head>

<body>
    <header>
        <h1>osu!taiko Hitsound Previewer</h1>
        <div id="nav">
            <div>
                <i class="ph-fill ph-house"></i>
                <a href="index.php?page=home">Home</a>
            </div>
            <div>
                <i class="ph-fill ph-note"></i>
                <a href="index.php?page=credits">Credits</a>
            </div>
        </div>  
    </header>


    <main>
    <?php
        if (isset($_GET['page'])) {
            include_once("views/".$_GET['page'].".php");
        }else{
            include_once("views/home.php");
        }?>
    </main>


    <footer>
        <div>
            <i class="ph-fill ph-github-logo"></i>
            <a href="https://github.com/glassive/taikohs" target="_blank">GitHub</a>
        </div>

        <div>
            <button id="colorReset"><i class="ph-fill ph-eyedropper"></i></button>  
            <input type="range" id="col" name="col" min="0" max="359" value="158">
        </div>
    </footer>

    <script src="color.js"></script>
</body>
</html>