(function(){
    $("#go").click(function(){
        try {
            var text = $.trim($('#matrix').val()),
                row, rows, col, cols, result = '';

            rows = text.split('\n');
            // console.log('Found ' + rows.length + ' rows');

            for (row = 0; row < rows.length; row++){
                // console.log(rows[row]);
                cols = rows[row].trim().replace('/\s+|\t+/g', ' ');
                // console.log('cols is ' + cols);
                cols = cols.split('\t');
                // console.log('Row ' + row + ' has ' + cols.length + ' cols');
                for (col = row + 1; col < cols.length; col++){
                    result += (' ' + cols[col]);
                }
            }

            // console.log('Result is ' + result);
            $('#result').html('<p>' + result + '</p>');
        }
        catch(e){
            console.log(e.message);
        }
        return false;
    });
})();
