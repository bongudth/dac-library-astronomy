<template>
  <div class="container d-flex justify-content-center">
    <div class="row">
      <div class="col-md" v-for="book in books" :key="book.id">
        <div class="product-wrapper mb-45">
          <div class="product-img">
            <img :src="require('../assets/books/' + book.image)" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookList",
  data() {
    return {
      books: [
        { id: "1", image: "200-cau-hoi-loi-giai-dap.jpg" },
        { id: "2", image: "1001-dieu-bi-an-chua-co-loi-giai.jpg" },
        { id: "3", image: "ban-thiet-ke-vi-dai.jpg" },
        { id: "4", image: "ca-phe-tren-sao-hoa.jpg" },
        { id: "5", image: "chia-khoa-vu-tru-cua-geogre.jpg" },
        { id: "6", image: "chuyen-nang-vepa.jpg" },
        { id: "7", image: "cuoc-chien-lo-den.jpg" },
        { id: "8", image: "cuoc-doi-ky-la-cua-nikola-tesla.png" },
        { id: "9", image: "cuu-tinh-vu-tru.jpg" },
        { id: "10", image: "dao-cua-vat-ly.jpg" },
        { id: "11", image: "doi-mat-voi-vu-tru.jpg" },
        { id: "12", image: "du-hanh-vao-tam-anh-sang.jpg" },
        { id: "13", image: "einstein-va-vu-tru-gian-no.jpg" },
        {
          id: "14",
          image: "galileo-galilei-nhung-nha-khoa-hoc-lam-thay-doi-the-gioi.jpg",
        },
        { id: "15", image: "giao-trinh-quang-hoc.jpg" },
        { id: "16", image: "hoc-don-va-hai-hoa.jpg" },
        { id: "17", image: "kho-tang-tri-thuc-nhan-loai.jpg" },
        { id: "18", image: "luoc-su-thoi-gian.jpg" },
        { id: "19", image: "nhung-cau-chuyen-phieu-luu-cua-mr-tompkins.jpg" },
        { id: "20", image: "nhung-cau-hoi-lon.jpg" },
        { id: "21", image: "nhung-con-duong-cua-anh-sang-tap-1.jpg" },
        { id: "22", image: "nhung-con-duong-cua-anh-sang-tap-2.jpg" },
        { id: "23", image: "problems-in-elementary-physics.jpg" },
        { id: "24", image: "so-tay-phi-hanh-gia.jpg" },
        { id: "25", image: "song-ngan-khi-to-khi-mo.jpg" },
        { id: "26", image: "su-tien-hoa-cua-vat-ly.jpg" },
        { id: "27", image: "tham-do-vu-tru.jpg" },
        { id: "28", image: "the-gioi-nhung-dieu-chua-biet-tap-2.jpg" },
        { id: "29", image: "thien-ha-that-dang-ngac-nhien.jpg" },
        { id: "30", image: "thien-van-vat-ly.jpg" },
        { id: "31", image: "trai-dat-va-he-mat-troi.jpg" },
        { id: "32", image: "tu-dien-thien-van-hoc-va-vat-ly-thien-van.jpg" },
        { id: "33", image: "ufo-dia-bay-da-hien-huu-day-roi.jpg" },
        { id: "34", image: "vu-tru-huyen-bi.jpg" },
        { id: "35", image: "vu-tru-va-hoa-sen.jpg" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
body {
  vertical-align: middle;
  display: flex;
  background-color: #eee;
}

.mt-100 {
  margin-top: 100px;
}

.product-wrapper,
.product-img > img {
  position: relative;
  height: 255px;
  width: 180px;
  object-fit: cover;
  overflow: hidden;
}

.mb-45 {
  margin-bottom: 45px;
}

.product-wrapper {
  border-radius: 0 5px 5px 0;
  transition: all 0.3s ease-in-out;
}

.product-wrapper:hover {
  cursor: pointer;
  transform: rotateY(-28deg) rotateZ(-2deg) scale(1.02);
  box-shadow: 1px 1px 2px #26282c, 2px 1px 0 #ffffff, 4px 2px 0 #ffffff,
    6px 3px 0 #ffffff, 8px 4px 0 #ffffff, 10px 5px 0 #ffffff, 12px 6px 0 #ffffff,
    14px 7px 0 #434d54, 15px 8px 2px #26282c;
}
</style>
