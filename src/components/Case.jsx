import Image from "next/image";

const Case = () => {
  return (
    <section className="c-case">
      <div className="c-case__ColumnCases">
        <h2>Case Studies</h2>

        <p>
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="c-case__ColumnCases">
        <div className="c-case__InlineCases">
          <div className="c-case__Box">
            <div className="c-case__borderR">
              <p>
                For a local restaurant, we implemented a targeted PPC campaign
                that resulted in a 50% increase in website traffic and a 25%
                increase in sales.
              </p>

              <a href="#">
                Learn More
                <Image
                  src="../img/seta.svg"
                  width={21}
                  height={20}
                  alt="arrow"
                />
              </a>
            </div>
          </div>
          <div className="c-case__Box">
            <div>
              <p>
                For a B2B software company, we developed an SEO strategy that
                resulted in a first page ranking for key keywords and a 200%
                increase in organic traffic.
              </p>

              <a href="#">
                Learn More
                <Image
                  src="../img/seta.svg"
                  width={21}
                  height={20}
                  alt="arrow"
                />
              </a>
            </div>
          </div>
          <div className="c-case__Box">
            <div className="c-case__borderL">
              <p>
                For a national retail chain, we created a social media marketing
                campaign that increased followers by 25% and generated a 20%
                increase in online sales.
              </p>

              <a href="#">
                Learn More
                <Image
                  src="../img/seta.svg"
                  width={21}
                  height={20}
                  alt="arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Case;
