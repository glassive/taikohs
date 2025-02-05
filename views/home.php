<div id="selection">
    <i id="volIcon" class="ph-fill ph-speaker-high"></i>
    <input type="range" id="vol" name="vol" min="0" max="100" value="20">

    <!-- <i class="ph-fill ph-arrow-circle-right"></i> -->
    <select name="selector" id="selector" onchange="window.sessionStorage.setItem('selector', document.getElementById('selector').value);">
        <option disabled>Pick some hitsounds!</option>
        <option id="hsSelector" value="default" selected>Default</option>
        <option id="hsSelector" value="tnt">Classic TNT</option>
        <option id="hsSelector" value="pingpong">Ping-Pong</option>
        <option id="hsSelector" value="light">Light</option>
        <option id="hsSelector" value="weeb">Weeb</option>
        <option id="hsSelector" value="goofy">Goofy</option>
        <option id="hsSelector" value="casinosu">casinosu!</option>
        <option id="hsSelector" value="amen">Amen Break</option>
        <option id="hsSelector" value="imagemat">Image Material</option>
        <option id="hsSelector" value="meow">meow</option>
    </select>

    <select name="sampleset" id="sampleset" onchange="window.sessionStorage.setItem('sampleset', document.getElementById('sampleset').value);">
        <option disabled>Sampleset</option>
        <option id="samplesetValue" value="normal" selected>Normal</option>
        <option id="samplesetValue" value="soft">Soft</option>
        <option id="samplesetValue" value="drum">Drum</option>
    </select>
</div>


<div id="wrapper">
    <div id="keybinds">
        <input type="text" class="keybind" name="kat1" id="kat1" maxlength="1">
        <input type="text" class="keybind" name="don1" id="don1" maxlength="1">
        <input type="text" class="keybind" name="don2" id="don2" maxlength="1">
        <input type="text" class="keybind" name="kat2" id="kat2" maxlength="1">
        <input type="text" class="keybind" name="donf" id="donf" maxlength="1">
        <input type="text" class="keybind" name="katf" id="katf" maxlength="1">
    </div>
    <button id="keybindReset"><i class="ph-fill ph-arrow-clockwise"></i></button>

    <div id="display">
        <div id="KatsuL">
            <div id="DonL"></div>
        </div>
        <div id="KatsuR">
            <div id="DonR"></div>
        </div>
    </div>
</div>

<button id="dlselec" onclick="downloadSelected()">
    <i class="ph-fill ph-download"></i>Download these hitsounds!
</button>

<script src="controller.js"></script>

<!-- <div id="upload">
    <i class="ph-fill ph-file-audio"></i>
    <input type="file" id="import" name="import" accept="audio/mp3, .ogg, .wav">
</div> -->




<!-- <button class="hsButton" id="KatsuL" href="#" onclick="playSound('clap');">
    <button class="hsButton" id="DonL" onclick="playSound('normal');"></button>
</button>
<div class="hsButton" id="KatsuR" href="#" onclick="playSound('clap');">
    <div class="hsButton" id="DonR" onclick="playSound('normal');"></div>
</div>

<div class="hsButton" id="BigDon" href="#" onclick="playSound('finish'), playSound('normal');"></div>
<div class="hsButton" id="BigKatsu" href="#" onclick="playSound('whistle'), playSound('clap');"></div> -->