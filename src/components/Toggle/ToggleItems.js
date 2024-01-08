
    import React, { useState } from 'react';

    function ToggleItems({ data }) {
      const [openItem, setOpenItem] = useState(null);
    
      function handler(id) {
        setOpenItem(openItem === id ? null : id);
      }
    
      return (
        <>
          {data.map(({ id, para, header }) => (
            <div className="" key={id}>
              <div className="" onClick={() => handler(id)}>
                <h1 className="">{header}</h1>
              </div>
              {openItem === id && (
                <div className="">
                  <p className="">{para}</p>
                </div>
              )}
            </div>
          ))}
        </>
      );
    }
    
    export default ToggleItems;
    