<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
    <style>
        td{
            border:1px solid red;
        }
    </style>
</head>
<body>
    <table>
        <?php for($i=1;$i<10;$i++) { ?>
            <tr>
            <?php for($j=1;$j<10;$j++){ ?>
                <td>

                <?php echo $i.'乘'.$j.'等于'.$i*$j ;?>

                </td>

                <?php } ?>
               
            </tr>
        <?php }?>
    </table>
</body>
</html>