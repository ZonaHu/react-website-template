import React from 'react';
import './style.css';

const CompanyIntro = (props) => {
    return (
        <section>
            <div className={"intro"}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col col-sm-4">
                            <h2>Empower International Students to
                                <span className={'excel'}> Excel.</span>
                            </h2>
                        </div>
                        <div className="col col-sm-8">
                            <p className="lead">海马国际教育是专注于国际课程培训的机构。主要业务有三大国际课程体系
                                AP/ALevel/IB的培训、国际主流竞赛指导及留学相关业务公司由名校海归联合教育行业资深人士创立。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyIntro;