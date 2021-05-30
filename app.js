function run(){
    text = document.getElementById('code');
    lines = text.value.split('\n')
    for (i = 0; i < lines.length; i++) {
        line = lines[i]
        words = line.split(' ')
        if (words[0] == 'چاپ' && words[1] == 'کن'){
            alert(words[2])
        }
      } 
}
