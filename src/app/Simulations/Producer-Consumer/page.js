// "use client";
// import React from 'react'
// import { useEffect, useRef, useState } from 'react';

// import './page.css';

// const ProducerConsumer = () => {
//   const canvasRef = useRef(null);
//   const [model, setModel] = useState(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     canvas.width = 500; // Set canvas width
//     canvas.height = 500; // Set canvas height

//     const options = {
//       canvasId: 'canvas',
//       canvasWidth: 500,
//       canvasHeight: 500,
//       dimX: 10,
//       dimY: 7,
//       consumerDelay: [300, 300],
//       producerDelay: [300, 300],
//       chunksCount: 4,
//       queueCapacity: 4,
//     };

//     const model = window.startModel(options);
//     setModel(model);

//     return () => {
//       model.pause(); // Cleanup
//     };
//   }, []);

//   const handleCanvasClick = () => {
//     if (model) {
//       if (model.isRunning()) {
//         model.pause();
//       } else if (model.isPaused()) {
//         model.start();
//       }
//     }
//   };

//   return (
//     <div>
//       <canvas id="canvas" ref={canvasRef} onClick={handleCanvasClick}></canvas>
//     </div>
//   );
// }

// export default ProducerConsumer;
"use client";
// import React, { useState, useEffect } from 'react';
// import './page.css';

// const ProducerConsumer = () => {
//   const [queue, setQueue] = useState([]);
//   const [producing, setProducing] = useState(false);

//   const produce = async (chunksCount) => {
//     setProducing(true);
//     for (let i = 0; i < chunksCount; i++) {
//       await new Promise((resolve) => setTimeout(resolve, 500)); // Simulating production time
//       setQueue((prevQueue) => [...prevQueue, i + 1]);
//     }
//     setProducing(false);
//   };

//   useEffect(() => {
//     let consumeInterval;

//     const consumeLoop = async () => {
//       consumeInterval = setInterval(async () => {
//         if (producing) {
//           await consume();
//         } else {
//           clearInterval(consumeInterval);
//         }
//       }, 500);
//     };

//     consumeLoop();

//     return () => clearInterval(consumeInterval);
//   }, [producing]);


//   const handleApply = () => {
//     const chunksCount = parseInt(document.getElementById('chunks-count').value, 10);
//     const queueCap = parseInt(document.getElementById('queue-cap').value, 10);
//     setQueue([]);
//     produce(chunksCount, queueCap);
//   };

//   useEffect(() => {
//     const consume = async () => {
//       if (queue.length > 0) {
//         const consumedChunk = queue[0];
//         setQueue((prevQueue) => prevQueue.slice(1));
//         // Simulating consumption time
//         await new Promise((resolve) => setTimeout(resolve, 500));
//         return consumedChunk;
//       }
//       return null;
//     };
  
//     let consumeInterval;
  
//     const consumeLoop = async (consumeFunc) => {
//       consumeInterval = setInterval(async () => {
//         if (producing) {
//           await consumeFunc();
//         } else {
//           clearInterval(consumeInterval);
//         }
//       }, 500);
//     };
  
//     consumeLoop(consume);
  
//     return () => clearInterval(consumeInterval);
//   }, [producing, queue]);
  


//   return (
//     <div className="page-layout">
//       <div className="side-control">
//         <div className="container">
//           <div className="input-group">
//             <input id="chunks-count" type="number" min="1" className="input" />
//             <label className="label">No. of Chunks</label>
//           </div>
//           <div className="input-group">
//             <input id="queue-cap" type="number" min="1" max="6" className="input" />
//             <label className="label">Queue Capacity</label>
//           </div>
//           <button id="options-apply" className="btn" onClick={handleApply}>
//             Apply
//           </button>
//         </div>
//       </div>
//       <div className="exp-vis">
//         <div id="canvas-container">
//           <div className="producer">Producer</div>
//           <div className="queue">
//             {queue.map((item) => (
//               <div key={item} className="chunk">
//                 {item}
//               </div>
//             ))}
//           </div>
//           <div className="consumer">Consumer</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProducerConsumer;

import React, { useState, useEffect, useRef } from 'react';

function ProducerConsumer() {
  const [queue, setQueue] = useState([]);
  const [waitSignal, setWaitSignal] = useState(0);
  const [chunksCount, setChunksCount] = useState(0);
  const [queueCapacity, setQueueCapacity] = useState(0);
  const canvasRef = useRef(null);
  const chunkWidth = 20;

  useEffect(() => {
    // Initialize canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 400;

    // Labels and borders
    ctx.font = '20px sans-serif';
    ctx.fillText('Producer', 50, 40);
    ctx.fillText('Consumer', 50, canvas.height - 20);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.moveTo(100, 0);
    ctx.lineTo(100, canvas.height);
    ctx.moveTo(200, 0);
    ctx.lineTo(200, canvas.height);
    ctx.stroke();

    // Start animation loop
    animate(ctx);
  }, []);

  const animate = (ctx) => {
    if (queue.length < queueCapacity && chunksCount > 0 && waitSignal === 0) {
      // Produce a chunk
      setChunksCount(chunksCount - 1);
      setWaitSignal(1);
      setQueue([...queue, { x: 105, y: 100 }]); // Initial placement
    } else if (queue.length > 0 && waitSignal === 1) {
      // Consume a chunk
      setWaitSignal(0);
      const firstChunk = queue.shift();
      const lastChunk = queue[queue.length - 1] || firstChunk;
      setQueue([
        ...queue.slice(1),
        {
          ...lastChunk,
          y: lastChunk.y + chunkWidth + 5 // Adjust spacing as needed
        }
      ]);
    }

    drawQueue(ctx);

    requestAnimationFrame(animate);
  };

  const drawQueue = (ctx) => {
    console.log('ctx:' ,ctx);
    ctx.clearRect(100, 0, 100, canvasRef.current.height); 
    queue.forEach((chunk, index) => {
      ctx.fillStyle = index === 0 ? '#ccc' : '#ddd'; 
      ctx.fillRect(chunk.x, chunk.y, chunkWidth, chunkWidth);
    });
  };

  const handleChunksChange = (event) => {
    setChunksCount(parseInt(event.target.value, 10));
  };

  const handleQueueCapacityChange = (event) => {
    setQueueCapacity(parseInt(event.target.value, 10));
  };

  const handleStart = () => {
    setQueue([]);
    setWaitSignal(0);
  };

  return (
    <div className="page-layout">
      <div className="side-control">
        <div className="container">
          <div className="input-group">
            <input
              id="chunks-count"
              type="number"
              min="1"
              className="input"
              onChange={handleChunksChange}
              value={chunksCount}
            />
            <label className="label">No. of Chunks</label>
          </div>

          <div className="input-group">
            <input
              id="queue-cap"
              type="number"
              min="1"
              max="6"
              className="input"
              onChange={handleQueueCapacityChange}
              value={queueCapacity}
            />
            <label className="label">Queue Capacity</label>
          </div>

          <button id="options-apply" className="btn" onClick={handleStart}>
            Start
          </button>
        </div>
      </div>

      <div className="exp-vis">
        <div id="canvas-container">
          <canvas ref={canvasRef} />
        </div>
      </div>
    </div>
  );
}


export default ProducerConsumer;