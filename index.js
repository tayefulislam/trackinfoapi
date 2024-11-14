const axios = require('axios');
const cheerio = require('cheerio');


let trackId =711042406841

const url = `https://trackings.post.japanpost.jp/services/srv/search/direct?reqCodeNo1=${trackId}&searchKind=S002&locale=en`; 
axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    // Example: Extracting all paragraph text
      const content = $('td').map((i, el) => $(el).text()).get().join('\n');
      
    //   console.log(content);
      
    //   console.log(content.toLocaleLowerCase().includes("final delivery"));

    //   console.log(content.toLocaleLowerCase().indexOf("processing at delivery post office"));

      const finalDeliveryIndex = content.toLocaleLowerCase().indexOf("final delivery");

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

