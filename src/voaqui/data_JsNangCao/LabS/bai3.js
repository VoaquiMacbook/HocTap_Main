async function logMovies() {
    const response = await fetch("https://fakestoreapi.com/products?limit=10 ");
    const movies = await response.json();
  
    // Duyệt qua mảng movies và thêm thuộc tính discount cho các sản phẩm có giá trị >= 100
    const moviesWithDiscount = movies.map(movie => {
      if (movie.price >= 100) {
        return { ...movie, discount: '30%' }; // Thêm thuộc tính discount cho sản phẩm
      }
      return movie; // Trả về sản phẩm không được điều chỉnh
    });
  
    console.log(moviesWithDiscount);
  }
  
  logMovies();
  