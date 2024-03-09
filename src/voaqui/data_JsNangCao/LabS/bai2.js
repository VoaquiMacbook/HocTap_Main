// async function logMovies() {
//     const response = await fetch("https://fakestoreapi.com/products?limit=10 ");
//     const movies = await response.json();
//     console.log(movies);
//   }
//   logMovies()
async function logSanPham() {
    const response = await fetch("https://fakestoreapi.com/products?limit=10 ");
    const sanpham = await response.json();
  
    // Lọc mảng để tìm các sản phẩm thuộc danh mục "electronics" và "jewelery"
    const electronics = sanpham.filter(sanpham=> sanpham.category === "electronics");
    const jewelery = sanpham.filter(sanpham => sanpham.category === "jewelery");
  
    console.log(sanpham);
    // In ra số lượng sản phẩm của mỗi danh mục
    console.log("Số lượng sản phẩm trong danh mục electronics:", electronics.length);
    console.log("Số lượng sản phẩm trong danh mục jewelery:", jewelery.length);
  }
  
  logSanPham();
  