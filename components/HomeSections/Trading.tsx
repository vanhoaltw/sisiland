export default function Trading() {
  return (
    <section
      className="text-center text-white bg-center bg-cover py-16"
      style={{ backgroundImage: 'url("/images/cds.png")' }}
    >
      <h3 className="text-4xl font-bold uppercase mb-4">Giao dịch chứng khoán</h3>
      <p className="uppercase mb-24 text-lg">Bạn chưa có tài khoản giao dịch chứng khoán?</p>

      <button className="bg-gradient-to-t from-[#59BA47] to-[#258345] uppercase rounded-full px-10 py-2.5">
        Mở tài khoản online
      </button>
    </section>
  );
}
