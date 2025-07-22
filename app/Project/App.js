import React from 'react'



const App = () => {
    const squares = [
        { size: 'w-100 h-120', color: 'bg-blue-900', imageUrl: '/gl6.png' },
        { size: 'w-0 h-0' },
        { size: 'w-140 h-70', imageUrl: '/gl12.png' },
        { size: 'w-0 h-0', color: 'bg-blue-600', imageUrl: '/gl7.png' },
        { size: 'w-0 h-0', color: 'bg-blue-900', imageUrl: '/gl4.png' },
        { size: 'w-140 h-70', color: 'bg-blue-700', imageUrl: '/img3.png' },
        { size: 'w-0 h-0' , color: 'bg-blue-700', imageUrl: '/gl9.png'},
        { size: 'w-70 h-90', color: 'bg-blue-800', imageUrl: '/gl2.png' },
        { size: 'w-0 h-0', color: 'bg-blue-900', imageUrl: '/gl10.png' },
        { size: 'w-0 h-0' , color: 'bg-blue-700', imageUrl: '/gl9.png'},
        { size: 'w-150 h-80', color: 'bg-blue-700', imageUrl: '/gl3.png' },
        { size: 'w-0 h-0', color: 'bg-blue-400', imageUrl: '/img2.png' },
        { size: 'w-0 h-0', color: 'bg-blue-800', imageUrl: '/img2.png' },
        { size: 'w-90 h-70',  imageUrl: '/gl5.png'},
        { size: 'w-140 h-50', imageUrl: '/gl11.png'},
    ];
    return (
        <div className="min-h-screen bg-gradient-radial from-[rgba(16,59,77,0.66)] to-black flex items-center justify-center p-50 font-inter relative"> {/* Added relative to parent for absolute positioning of text */}
            {/* Absolute positioned text for "ABSTRACT DESIGN" */}
            {/* Adjusted positioning to be relative to the main screen container */}
            <div className="absolute top-8 right-8 text-right z-10 p-4"> {/* Added padding to prevent text from touching edges */}

            </div>

            {/* Grid container for the abstract squares */}
            {/* Centered the grid within the main flex container */}
            <div className="relative grid grid-cols-5 md:grid-cols-8 gap-1 md:gap-2 auto-rows-min max-w-6xl w-full">
                {squares.map((square, index) => (
                    <div
                        key={index}
                        className={`
              ${square.size} ${square.color} rounded-md shadow-inner
              transform transition-transform duration-300 
              flex items-center justify-center overflow-hidden
              // Responsive positioning to mimic the scattered look
              ${index % 5 === 0 ? 'col-start-1' : ''
                            }
              ${index % 7 === 1 ? 'col-start-2' : ''
                            }
              ${index % 3 === 2 ? 'col-start-4' : ''
                            }
              ${index % 6 === 3 ? 'col-start-1 md:col-start-6' : ''
                            }
              ${index % 4 === 0 ? 'row-start-auto' : ''
                            }
            `}
                        style={{
                            // Adding some random offsets to further break the grid regularity
                            marginTop: `${(index % 5) * 8}px`,
                            marginLeft: `${(index % 10) * 20}px`,
                        }}
                    >
                        {square.imageUrl ? (
                            // If imageUrl exists, render an image
                            <img
                                src={square.imageUrl}
                                alt={`Abstract design element ${index + 1}`}
                                className="w-full h-full object-cover" // Ensure image covers the square
                                onError={(e) => {
                                    e.target.onerror = null; // Prevent infinite loop if fallback also fails
                                    e.target.src = `https://placehold.co/${square.size.split(' ')[0].replace('w-', '')}x${square.size.split(' ')[1].replace('h-', '')}/cccccc/333333?text=Error`; // Fallback placeholder
                                }}
                            />
                        ) : (
                            // Otherwise, render a simple colored div (content can be added here)
                            <div className="text-white text-xs font-semibold">
                                {/* Optional: You can add content to each square if needed */}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            
        </div>

    )
}

export default App