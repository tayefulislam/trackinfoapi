const axios = require('axios');
const cheerio = require('cheerio');


let trackId =711042406826

const url = `https://www.ship24.com/tracking?p=4927-0660-6593&a=2117`; 
axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

      // Example: Extracting all paragraph text
      // japan post
    //   const content = $('td').map((i, el) => $(el).text()).get().join('\n');

      const content = $('p').map((i, el) => $(el).text()).get().join('\n');
      
    //   console.log(content);
      
    //   console.log(content.toLocaleLowerCase().includes("final delivery"));

      //   console.log(content.toLocaleLowerCase().indexOf("processing at delivery post office"));
      
      console.log(content)

      const finalDeliveryIndex = content.toLocaleLowerCase().indexOf("delivered");

      if (finalDeliveryIndex > 1) {
          
          const getDeliveryTime = content.slice(finalDeliveryIndex - 20, finalDeliveryIndex);
          
        console.log(getDeliveryTime) 
      }


    //   const returnDeliveryIndex = content.toLocaleLowerCase().indexOf("returned to sender");

    //   console.log(returnDeliveryIndex)

    //   if (returnDeliveryIndex > 1) {
          
    //       const getDeliveryTime = content.slice(returnDeliveryIndex - 20, returnDeliveryIndex);
          
    //     console.log(getDeliveryTime) 
    //   }

      

    

     
      

  })
  .catch(error => {
    console.error(`Error fetching the URL: ${error}`);
  });

