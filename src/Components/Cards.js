import React from "react";
import {
  FcCurrencyExchange,
  FcEndCall,
  FcMoneyTransfer,
  FcSurvey,
} from "react-icons/fc";

const CardsComponent = () => {
  return (
    <div class="row row-cols-1 row-cols-md-4 g-4 mt-1 mb-2">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div className="row">
              <div className="col-md-6 ">
                <FcCurrencyExchange />
              </div>
              <div className="col-md-6">
                <div className="text card__label">Earning</div>
                <div className="text card__price">$256</div>
                <div className="text card__percent__even">
                  <span>7%</span> this month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-60">
          <div class="card-body">
            <div className="row">
              <div className="col-md-6 ">
                <FcEndCall />
              </div>
              <div className="col-md-6 ">
                <div className="text card__label">Order</div>
                <div className="text card__price">$2.4 K</div>
                <div className="text card__percent__odd">
                  <span>2%</span> this month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-60">
          <div class="card-body">
            <div className="row">
              <div className="col-md-6 ">
                <FcMoneyTransfer />
              </div>
              <div className="col-md-6 ">
                <div className="text card__label">Balance</div>
                <div className="text card__price">$2.6 k</div>
                <div className="text card__percent__even">
                  <span>2%</span> this month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-60">
          <div class="card-body">
            <div className="row">
              <div className="col-md-6 ">
                <FcSurvey />
              </div>
              <div className="col-md-6 ">
                <div className="text card__label">Total sale</div>
                <div className="text card__price">$86k</div>
                <div className="text card__percent__odd">
                  <span>2%</span> this month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsComponent;
