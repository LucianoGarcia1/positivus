import Image from "next/image";
import { Button } from "./Button";

export const Team = () => {
  return (
    <section className="c-team">
      <div className="c-team__Group">
        <h2>Team</h2>

        <p className="c-team__p">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="c-team__Group">
        <div className="c-team__inlineBox">
          <div className="c-team__Box">
            <div className="c-team__Apresentation">
              <Image src="../img/ceo.svg" alt="ceo" width={103} height={103} />

              <h4>
                John Smith <br />
                <span>CEO and Founder</span>
              </h4>

              <a href="#">
                <Image
                  src="../img/linkedinT.svg"
                  alt="linkedin"
                  width={34}
                  height={34}
                />
              </a>
            </div>

            <div className="c-team__description">
              <p>
                10+ years of experience in digital marketing. Expertise in SEO,
                PPC, and content strategy
              </p>
            </div>
          </div>
          <div className="c-team__Box">
            <div className="c-team__Apresentation">
              <Image src="../img/doo.svg" alt="doo" width={103} height={103} />

              <h4>
                Jane Doe <br />
                <span>Director of Operations</span>
              </h4>

              <a href="#">
                <Image
                  src="../img/linkedinT.svg"
                  alt="linkedin"
                  width={34}
                  height={34}
                />
              </a>
            </div>

            <div className="c-team__description">
              <p>
                7+ years of experience in project management and team
                leadership. Strong organizational and communication skills
              </p>
            </div>
          </div>
          <div className="c-team__Box">
            <div className="c-team__Apresentation">
              <Image src="../img/sss.svg" alt="sss" width={103} height={103} />

              <h4>
                Michael Brown <br />
                <span>Senior SEO Specialist</span>
              </h4>

              <a href="#">
                <Image
                  src="../img/linkedinT.svg"
                  alt="linkedin"
                  width={34}
                  height={34}
                />
              </a>
            </div>

            <div className="c-team__description">
              <p>
                5+ years of experience in SEO and content creation. Proficient
                in keyword research and on-page optimization
              </p>
            </div>
          </div>
        </div>
        <div className="c-team__inlineBox">
          <div className="c-team__Box">
            <div className="c-team__Apresentation">
              <Image src="../img/ppc.svg" alt="ppc" width={103} height={103} />

              <h4>
                Emily Johnson <br />
                <span>PPC Manager</span>
              </h4>

              <a href="#">
                <Image
                  src="../img/linkedinT.svg"
                  alt="linkedin"
                  width={34}
                  height={34}
                />
              </a>
            </div>

            <div className="c-team__description">
              <p>
                3+ years of experience in paid search advertising. Skilled in
                campaign management and performance analysis
              </p>
            </div>
          </div>
          <div className="c-team__Box">
            <div className="c-team__Apresentation">
              <Image src="../img/sms.svg" alt="sms" width={103} height={103} />

              <h4>
                Brian Williams <br />
                <span>Social Media Specialist</span>
              </h4>

              <a href="#">
                <Image
                  src="../img/linkedinT.svg"
                  alt="linkedin"
                  width={34}
                  height={34}
                />
              </a>
            </div>

            <div className="c-team__description">
              <p>
                4+ years of experience in social media marketing. Proficient in
                creating and scheduling content, analyzing metrics, and building
                engagements
              </p>
            </div>
          </div>
          <div className="c-team__Box">
            <div className="c-team__Apresentation">
              <Image src="../img/cc.svg" alt="cc" width={103} height={103} />

              <h4>
                Sarah Kim <br />
                <span>Content Creator</span>
              </h4>

              <a href="#">
                <Image
                  src="../img/linkedinT.svg"
                  alt="linkedin"
                  width={34}
                  height={34}
                />
              </a>
            </div>

            <div className="c-team__description">
              <p>
                2+ years of experience in writing and editing Skilled in
                creating compelling, SEO-optimized content for various
                industries
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="c-team__AllTeam">
        <Button classe="c-button__ButtonCta" type="button">
          She all team
        </Button>
      </div>
    </section>
  );
};
