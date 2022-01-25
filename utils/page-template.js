const generatePage = (data) => {
    return`
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Profile generator</title>
      <link rel="stylesheet" href="./assets/style.css">
    </head>
    
    <body>
        <div class="card">
            <div class="container">
                <h4>${data.name}</h4>
                <p>${data.job}</p>
            </div>
        </div>
    </body>
    </html>
        `;
    
    };

    module.exports = generatePage;