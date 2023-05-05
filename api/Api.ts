/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ApiErrorDto {
  /** @format int64 */
  timestamp?: number;
  /** @format int32 */
  status?: number;
  error?: string;
  message?: string;
  localizedMessagesKey?: string;
}

export interface BannerActionModel {
  type?: "BUTTON" | "SLIDE";
  text?: BaseLocaleModel;
  link?: string;
}

export interface BannerConstructorModel {
  labelOn?: boolean;
  horizontalAlign?: "LEFT" | "CENTER" | "RIGHT";
  imagePosition?: "LEFT" | "CENTER" | "RIGHT";
  type?: "COLUMN" | "ROW";
  head?: BaseLocaleModel;
  headImageOn?: boolean;
  name?: BaseLocaleModel;
  number?: BaseLocaleModel;
  description?: BaseLocaleModel;
  action?: BannerActionModel;
}

export interface BaseLocaleModel {
  en?: string;
  ua?: string;
  ru?: string;
}

export interface BonusModel {
  userId?: string;
  region?: string;
  broadcast?: boolean;
  id?: string;
  state?: "NOT_ACTIVATED" | "ACTIVATED" | "LOST" | "FINISHED" | "CANCELED" | "CANCELED_FROM_USER";
  title?: BaseLocaleModel;
  code?: string;
  descriptions?: BaseLocaleModel;
  banners?: BaseLocaleModel;
  requireEmailVerify?: boolean;
  requirePhoneVerify?: boolean;
  requireDeposit?: boolean;
  /** @format date-time */
  createdDate?: string;
  /** @format date-time */
  expireDate?: string;
  /** @format date-time */
  availabilityDate?: string;
  currentWager?: number;
  totalWager?: number;
  /** @format int32 */
  wager?: number;
  /** @format double */
  percent?: number;
  /** @format int32 */
  countGiftSpins?: number;
  minDeposit?: number;
  maxDeposit?: number;
  /** @format int32 */
  minBet?: number;
  /** @format int32 */
  maxBet?: number;
  type?: "PERCENT_ON_DEPOSIT" | "FIXED" | "NON_DEPOSIT" | "GIFT_SPINS";
  nextStep?: boolean;
  giftWin?: number;
  /** @deprecated */
  balanceAfterWin?: number;
  bonusWin?: number;
  game?: string;
  disabledActivation?: boolean;
  seen?: boolean;
  /** @deprecated */
  available?: boolean;
  availability?: "AVAILABLE" | "NOT_AVAILABLE" | "NOT_AVAILABLE_MULTI" | "NOT_AVAILABLE_NO_VIP";
  availableForCancel?: boolean;
  fixedSum?: number;
  bannerConstructor?: BannerConstructorModel;
  isModernBanner?: boolean;
  availableForBuy?: boolean;
}

export interface BranchBonus {
  /** @format int32 */
  deposit?: number;
  bonus?: BonusModel;
  additionalBonus?: BonusModel;
}

export interface WelcomeBranch {
  name?: BaseLocaleModel;
  description?: BaseLocaleModel;
  branchName?: BaseLocaleModel;
  bonuses?: BranchBonus[];
  empty?: boolean;
}

export interface VerifyPhoneModel {
  phone?: string;
  captchaCode?: string;
}

export interface ConnectionSpeedModel {
  /** @format double */
  downlink?: number;
  effectiveType?: string;
}

export interface SignUpModel {
  email?: string;
  phone?: string;
  password?: string;
  phoneVerifyCode?: string;
  region?: string;
  country?: string;
  welcomeBranchId?: string;
}

export interface VerifyEmailModel {
  email?: string;
}

export interface ResetPasswordModel {
  email?: string;
  phone?: string;
}

export type FirebaseToken = object;

export interface UpdateProfileModel {
  nickname?: string;
  firebaseToken?: FirebaseToken;
}

export interface ProfileModel {
  id?: string;
  username?: string;
  nickname?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  /** @format date-time */
  registerDate?: string;
  emailVerify?: boolean;
  phoneVerify?: boolean;
  justRegistered?: boolean;
  hasAccessToVipClub?: boolean;
  isNew?: boolean;
  subscribedToBot?: boolean;
  hasSuccessDeposit?: boolean;
  showGift?: boolean;
  askRegion?: boolean;
  showChristmasTree?: boolean;
  favoriteGames?: string[];
  activeLottery?: string;
  firstName?: string;
  secondName?: string;
  lastName?: string;
  birthday?: string;
  sex?: string;
  errorMessage?: string;
  active?: boolean;
  blocked?: boolean;
  balance?: number;
  token?: string;
  firebaseToken?: FirebaseToken;
  nominations?: UserNominationModel;
}

export interface UserNominationModel {
  pretend?: string[];
  winner?: string[];
  active?: string;
  seenWinner?: boolean;
  finished?: boolean;
}

export interface SetRegionModel {
  country?: string;
  region?: string;
}

export interface FcmTokenModel {
  token?: string;
}

export interface QueryParamsModel {
  queryParams?: string;
  isRegistration?: boolean;
}

export interface DocumentModel {
  id?: string;
  status?: string;
  preview?: string;
  link?: string;
  type?: string;
  /** @format date-time */
  updatedDate?: string;
  description?: BaseLocaleModel;
}

export interface WebSession {
  maxIdleTime?: {
    /** @format int64 */
    seconds?: number;
    zero?: boolean;
    negative?: boolean;
    /** @format int32 */
    nano?: number;
    units?: {
      dateBased?: boolean;
      timeBased?: boolean;
      durationEstimated?: boolean;
    }[];
  };
  /** @format date-time */
  lastAccessTime?: string;
  /** @format date-time */
  creationTime?: string;
  started?: boolean;
  expired?: boolean;
  id?: string;
}

export interface ChangePasswordModel {
  token?: string;
  password?: string;
  phone?: string;
}

export interface ChangePasswordNativeModel {
  oldPassword?: string;
  password?: string;
}

export interface TournamentModel {
  code?: string;
  name?: BaseLocaleModel;
  banners?: BaseLocaleModel;
  rules?: BaseLocaleModel;
  mainPrize?: string;
  /** @format date-time */
  from?: string;
  /** @format date-time */
  to?: string;
  status?: "UPCOMING" | "CURRENT" | "END";
  type?: "MONEY" | "MONEY_PERCENT" | "BONUS" | "OTHER";
  minNominal?: number;
  gameList?: string[];
  /** @format int32 */
  games?: number;
  /** @format int32 */
  members?: number;
  places?: TournamentPlaceView[];
  prizes?: string[];
  joined?: boolean;
  available?: boolean;
  my?: TournamentPlaceView;
}

export interface TournamentPlaceView {
  /** @format int32 */
  number?: number;
  userId?: string;
  activeNomination?: string;
  name?: string;
  prize?: string;
}

export interface UserAnswerDto {
  /** @format int32 */
  step?: number;
  answers?: string[];
}

export interface PayOutRequestModel {
  payWay?: string;
  cardNumber?: string;
  sum?: number;
}

export interface PayInRequestModel {
  payway?: string;
  sum?: number;
  card?: string;
  phone?: string;
  bonusCode?: string;
  lotteryCode?: string;
  metadata?: string;
}

export interface PayInResponseModel {
  accepted?: boolean;
  form?: string;
  link?: string;
  message?: string;
}

export interface BankCardModel {
  mask?: string;
}

export interface CheckPayOutCardRequestModel {
  card?: string;
}

export interface CheckPayOutCardModel {
  verify?: boolean;
  crc?: boolean;
}

export interface MetaDataRequest {
  path?: string;
}

export interface MetaDataModel {
  title?: BaseLocaleModel;
  description?: BaseLocaleModel;
  h1?: BaseLocaleModel;
  nofollow?: boolean;
  noindex?: boolean;
}

export interface BuyGameBonusModel {
  /** @format int32 */
  bet?: number;
  /** @format int32 */
  line?: number;
  denomination?: number;
  nominal?: number;
  game?: string;
}

export interface ActionButton {
  enabled?: boolean;
  text?: BaseLocaleModel;
  link?: string;
}

export interface AdditionalParams {
  type: string;
}

export type GameAdditionalParams = AdditionalParams & {
  nominal?: number;
  maxNominal?: number;
  winFactor?: number;
  games?: string[];
};

export type LotteryAdditionalParams = AdditionalParams & {
  lotteryCodes?: string[];
};

export interface UserBoxModel {
  id?: string;
  names?: BaseLocaleModel;
  rules?: BaseLocaleModel;
  typeIcon?: string;
  targetType?: "SPIN_COUNT" | "RISK_COUNT" | "LOTTERY_ACTIVE_TICKETS_COUNT";
  target?: number;
  params?: GameAdditionalParams | LotteryAdditionalParams;
  current?: number;
  state?: "PROCESSING" | "AVAILABLE" | "OPENED" | "LOST" | "FINISHED";
  prizes?: UserBoxPrize[];
  /** @format date-time */
  createdDate?: string;
  vip?: boolean;
  /** @format date-time */
  finishDate?: string;
  actionButton?: ActionButton;
}

export interface UserBoxPrize {
  id?: string;
  type?: "PERCENT_ON_DEPOSIT" | "FIXED" | "NON_DEPOSIT" | "GIFT_SPINS";
  prize?: number;
  names?: BaseLocaleModel;
  prizeId?: string;
  mostValuable?: boolean;
}

export interface BuyBonusRequestModel {
  userBonusId?: string;
  amount?: number;
}

export interface BonusModelV2 {
  bonuses?: BonusModel[];
  welcomeBranch?: WelcomeBranch;
  welcomePackModel?: WelcomePackModel;
}

export interface BranchModel {
  id?: string;
  name?: BaseLocaleModel;
  bonuses?: DepositBonusModel[];
}

export interface DepositBonus {
  code?: string;
  type?: "PERCENT_ON_DEPOSIT" | "FIXED" | "NON_DEPOSIT" | "GIFT_SPINS";
  descriptions?: BaseLocaleModel;
  size?: number;
}

export interface DepositBonusModel {
  /** @format int32 */
  depositNumber?: number;
  bonus?: DepositBonus;
  additionalBonus?: DepositBonus;
}

export interface WelcomePackModel {
  name?: BaseLocaleModel;
  description?: BaseLocaleModel;
  branches?: BranchModel[];
  empty?: boolean;
}

export interface VipModel {
  /** @format int32 */
  days?: number;
  target?: number;
  current?: number;
  dropTarget?: number;
  dropCurrent?: number;
}

export interface ProfileInfoModel {
  id?: string;
  nickname?: string;
  phone?: string;
  email?: string;
  active?: boolean;
  blocked?: boolean;
  balance?: number;
  token?: string;
  crmHash?: string;
}

export interface TournamentSimpleModel {
  banners?: BaseLocaleModel;
  code?: string;
  name?: BaseLocaleModel;
  mainPrize?: string;
  minNominal?: number;
  /** @format int32 */
  games?: number;
  /** @format int32 */
  members?: number;
}

export interface ActionButtonData {
  text?: BaseLocaleModel;
  link?: string;
  enable?: boolean;
}

export interface PromotionV2Model {
  promotionId?: string;
  title?: BaseLocaleModel;
  description?: BaseLocaleModel;
  mobilePicture?: BaseLocaleModel;
  desktopPicture?: BaseLocaleModel;
  actionButton?: ActionButtonData;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  active?: boolean;
  available?: boolean;
  botBlockEnable?: boolean;
}

export interface PaymentOutConfigModel {
  mainBalance?: number;
  bonusBalance?: number;
  active?: boolean;
  addresses?: string[];
  cards?: BankCardModel[];
  providers?: PaymentProviderModel[];
}

export interface PaymentProviderModel {
  type?: string;
  showAlert?: boolean;
  min?: number;
  max?: number;
  hotListSum?: number[];
  defaultSum?: number;
  code?: string;
  identifiers?: string[];
  regexp?: string;
  icon?: string;
  iconSmall?: string;
}

export interface PaymentInConfigModel {
  active?: boolean;
  hotPayInValues?: number[];
  providers?: PaymentProviderModel[];
  payInValue?: number;
}

export interface OrderHistoryModel {
  id?: string;
  /** @format date-time */
  updatedDate?: string;
  amount?: number;
  initialBalance?: number;
  type?: string;
  state?: string;
  description?: string;
  card?: string;
  payway?: string;
  cancelAvailable?: boolean;
  iconSmall?: string;
}

export interface NominationModel {
  id?: string;
  icon?: string;
  names?: BaseLocaleModel;
  description?: BaseLocaleModel;
  winner?: Winner;
}

export interface Winner {
  nickname?: string;
  userId?: string;
  active?: boolean;
}

export interface LotteryModel {
  id?: string;
  code?: string;
  status?: "UPCOMING" | "CURRENT" | "END";
  giftImage?: BaseLocaleModel;
  titles?: BaseLocaleModel;
  rules?: BaseLocaleModel;
  ticketDescription?: BaseLocaleModel;
  participate?: BaseLocaleModel;
  winnerDescription?: BaseLocaleModel;
  /** @format date-time */
  dateFrom?: string;
  /** @format date-time */
  dateTo?: string;
  banners?: BaseLocaleModel;
  descriptions?: BaseLocaleModel;
  /** @format int32 */
  availableTickets?: number;
  /** @format int32 */
  activeTickets?: number;
  available?: boolean;
  prefer?: boolean;
  ticketType?: string;
  fund?: number;
  ticketPrice?: number;
  currentDrop?: number;
  /** @format int32 */
  place?: number;
  activationFactor?: number;
  places?: Places[];
}

export interface Places {
  userId?: string;
  activeNomination?: string;
  name?: string;
  result?: string;
}

export interface FeatureTicketsModel {
  id?: string;
  deposit?: number;
  /** @format int32 */
  tickets?: number;
  featureDeposit?: number;
  /** @format int32 */
  featureTickets?: number;
}

export interface JackpotWinnerModel {
  cashBet?: number;
  cashWin?: number;
  /** @format date-time */
  winDate?: string;
  gameCode?: string;
}

export interface ContentModel {
  path?: string;
}

export interface ContentMenuModel {
  title?: BaseLocaleModel;
  link?: string;
  icon?: string;
  alert?: boolean;
  /** @format int32 */
  index?: number;
}

export interface UserBonusGiftModel {
  todayOpened?: boolean;
  canActivate?: boolean;
  /** @format date-time */
  availabilityDate?: string;
  hasNext?: boolean;
  messagesForRule?: BaseLocaleModel;
}

export interface ApplicationModel {
  banners?: BannerModel[];
  games?: GameModel[];
  jackpots?: JackpotWinningsModel;
  gameCategory?: GameCategoryModel[];
  authenticated?: boolean;
  siteConfigs?: SiteConfigs;
  widget?: WidgetModel;
  welcomePack?: WelcomePackModel;
}

export interface BannerModel {
  id?: string;
  link?: string;
  goToBot?: boolean;
  image?: BaseLocaleModel;
  imageWide?: BaseLocaleModel;
  bannerConstructor?: BannerConstructorModel;
  isModernBanner?: boolean;
}

export interface BuyBonusInfo {
  /** @format int32 */
  line?: number;
  /** @format int32 */
  factor?: number;
}

export interface Currency {
  symbol?: string;
  code?: string;
  shortName?: BaseLocaleModel;
  fullName?: BaseLocaleModel;
}

export interface GameCategoryModel {
  name?: BaseLocaleModel;
  /** @uniqueItems true */
  gameList?: string[];
  icon?: string;
  code?: string;
  label?: string;
  showLabel?: boolean;
  hidden?: boolean;
}

export interface GameModel {
  code?: string;
  name?: string;
  image?: string;
  /** @uniqueItems true */
  labels?: string[];
  available?: boolean;
  synonyms?: BaseLocaleModel;
  volatility?: string;
  external?: boolean;
  announcement?: boolean;
  buyBonus?: BuyBonusInfo;
}

export interface JackpotWinningsModel {
  jackpot?: number;
  big?: number;
  mega?: number;
}

export interface Locale {
  code?: string;
  iso?: string;
}

export interface Logo {
  full?: string;
  small?: string;
}

export interface PhoneConfig {
  prefix?: string;
  flag?: string;
  regex?: string;
  mask?: string;
  country?: BaseLocaleModel;
}

export interface RegionModel {
  id?: string;
  currency?: Currency;
  /** @deprecated */
  locales?: string[];
  locale?: Locale[];
  phonesConfig?: PhoneConfig[];
  icon?: string;
  logo?: Logo;
}

export interface SiteConfigs {
  googleEnabled?: boolean;
  facebookEnabled?: boolean;
  ageConfirm?: boolean;
  jackpotPageEnabled?: boolean;
  boxesPageEnabled?: boolean;
  tournamentPageEnabled?: boolean;
  lotteryPageEnabled?: boolean;
  telegramBotEnable?: boolean;
  redirectEvenUserEnabled?: boolean;
  resizeImageEnabled?: boolean;
  nominationsPageEnabled?: boolean;
  menuList?: ContentMenuModel[];
  regionsList?: RegionModel[];
  telegramConfigs?: TelegramConfigs;
  gtm?: string;
  ga4?: string;
}

export interface TelegramConfigs {
  enable?: boolean;
  botLink?: string;
  botSite?: string;
  channelLink?: string;
}

export interface WidgetButton {
  link?: string;
  icon?: string;
  text?: BaseLocaleModel;
}

export interface WidgetModel {
  title?: BaseLocaleModel;
  button?: WidgetButton;
}

export interface CountryModel {
  id?: string;
  names?: BaseLocaleModel;
}

export interface CurrencyModel {
  name?: BaseLocaleModel;
  region?: string;
  currency?: Currency;
}

export interface RegistrationByRegionConfigs {
  phones?: PhoneConfig[];
  countries?: CountryModel[];
  currencies?: CurrencyModel[];
}

export interface AchievementsModel {
  royal?: RoyalClubModel;
  topGames?: TopGameModel[];
}

export interface RoyalClubModel {
  show?: boolean;
  showProgress?: boolean;
  progress?: VipModel;
}

export interface TopGameModel {
  game?: string;
  maxWin?: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof $fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://dragon-stage.ltcenter.info";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof $fetch>) => $fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title OpenAPI definition
 * @version v0
 * @baseUrl https://dragon-stage.ltcenter.info
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  bonusControllerV2 = {
    /**
     * No description
     *
     * @tags bonus-controller-v-2
     * @name SelectBranch
     * @request POST:/api/v2/bonuses/select-branch
     */
    selectBranch: (
      query: {
        branch: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<WelcomeBranch, ApiErrorDto>({
        path: `/api/v2/bonuses/select-branch`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags bonus-controller-v-2
     * @name BonusesModels
     * @request GET:/api/v2/bonuses
     */
    bonusesModels: (params: RequestParams = {}) =>
      this.request<BonusModelV2, ApiErrorDto>({
        path: `/api/v2/bonuses`,
        method: "GET",
        ...params,
      }),
  };
  userController = {
    /**
     * No description
     *
     * @tags user-controller
     * @name VerifyPhone
     * @request POST:/api/users/verify-phone
     */
    verifyPhone: (data: VerifyPhoneModel, params: RequestParams = {}) =>
      this.request<FirebaseToken, ApiErrorDto>({
        path: `/api/users/verify-phone`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name UpdateSeenWinnerNomination
     * @request POST:/api/users/update-seen-nomination
     */
    updateSeenWinnerNomination: (params: RequestParams = {}) =>
      this.request<void, ApiErrorDto>({
        path: `/api/users/update-seen-nomination`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name SaveConnectionSpeed
     * @request POST:/api/users/speed
     */
    saveConnectionSpeed: (data: ConnectionSpeedModel, params: RequestParams = {}) =>
      this.request<void, ApiErrorDto>({
        path: `/api/users/speed`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name SignUp
     * @request POST:/api/users/sign-up
     */
    signUp: (data: SignUpModel, params: RequestParams = {}) =>
      this.request<void, ApiErrorDto>({
        path: `/api/users/sign-up`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name SendVerifyEmail
     * @request POST:/api/users/send-verify-email
     */
    sendVerifyEmail: (data: VerifyEmailModel, params: RequestParams = {}) =>
      this.request<void, ApiErrorDto>({
        path: `/api/users/send-verify-email`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name SendCode
     * @request POST:/api/users/send-verify-code
     */
    sendCode: (data: VerifyPhoneModel, params: RequestParams = {}) =>
      this.request<FirebaseToken, ApiErrorDto>({
        path: `/api/users/send-verify-code`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name ResetPassword
     * @request POST:/api/users/reset-password
     */
    resetPassword: (data: ResetPasswordModel, params: RequestParams = {}) =>
      this.request<void, ApiErrorDto>({
        path: `/api/users/reset-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name UserProfile
     * @request GET:/api/users/profile
     */
    userProfile: (params: RequestParams = {}) =>
      this.request<ProfileModel, ApiErrorDto>({
        path: `/api/users/profile`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name UpdateUserProfile
     * @request POST:/api/users/profile
     */
    updateUserProfile: (data: UpdateProfileModel, params: RequestParams = {}) =>
      this.request<ProfileModel, ApiErrorDto>({
        path: `/api/users/profile`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name SetRegion
     * @request POST:/api/users/profile/set-region
     */
    setRegion: (data: SetRegionModel, params: RequestParams = {}) =>
      this.request<ProfileModel, ApiErrorDto>({
        path: `/api/users/profile/set-region`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name AddFcmToken
     * @request POST:/api/users/profile/fcm
     */
    addFcmToken: (data: FcmTokenModel, params: RequestParams = {}) =>
      this.request<void, ApiErrorDto>({
        path: `/api/users/profile/fcm`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name AddFavoriteGame
     * @request POST:/api/users/profile/add-favorite-game/{gameCode}
     */
    addFavoriteGame: (gameCode: string, params: RequestParams = {}) =>
      this.request<void, ApiErrorDto>({
        path: `/api/users/profile/add-favorite-game/${gameCode}`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name SaveLabels
     * @request POST:/api/users/labels
     */
    saveLabels: (data: QueryParamsModel, params: RequestParams = {}) =>
      this.request<void, ApiErrorDto>({
        path: `/api/users/labels`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name UserDocuments
     * @request GET:/api/users/documents
     */
    userDocuments: (params: RequestParams = {}) =>
      this.request<DocumentModel[], ApiErrorDto>({
        path: `/api/users/documents`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name UploadUserDocument
     * @request POST:/api/users/documents
     */
    uploadUserDocument: (
      query: {
        /** @format binary */
        file: File;
        type: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<DocumentModel, ApiErrorDto>({
        path: `/api/users/documents`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name DeleteYourself
     * @request POST:/api/users/delete
     */
    deleteYourself: (
      query: {
        session: WebSession;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ApiErrorDto>({
        path: `/api/users/delete`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name CheckToken
     * @request POST:/api/users/check-token
     */
    checkToken: (data: ChangePasswordModel, params: RequestParams = {}) =>
      this.request<void, ApiErrorDto>({
        path: `/api/users/check-token`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name ChangePassword
     * @request POST:/api/users/change-password
     */
    changePassword: (data: ChangePasswordModel, params: RequestParams = {}) =>
      this.request<void, ApiErrorDto>({
        path: `/api/users/change-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name ChangePasswordNative
     * @request POST:/api/users/change-password-native
     */
    changePasswordNative: (data: ChangePasswordNativeModel, params: RequestParams = {}) =>
      this.request<void, ApiErrorDto>({
        path: `/api/users/change-password-native`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name VipInfo
     * @request GET:/api/users/vip-info
     */
    vipInfo: (params: RequestParams = {}) =>
      this.request<VipModel, ApiErrorDto>({
        path: `/api/users/vip-info`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name AcceptEmail
     * @request GET:/api/users/verify-email
     */
    acceptEmail: (
      query: {
        token: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FirebaseToken, ApiErrorDto>({
        path: `/api/users/verify-email`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name CurrentUser
     * @request GET:/api/users/me
     * @deprecated
     */
    currentUser: (params: RequestParams = {}) =>
      this.request<ProfileInfoModel, ApiErrorDto>({
        path: `/api/users/me`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name DeleteFavoriteGame
     * @request DELETE:/api/users/profile/del-favorite-game/{gameCode}
     */
    deleteFavoriteGame: (gameCode: string, params: RequestParams = {}) =>
      this.request<void, ApiErrorDto>({
        path: `/api/users/profile/del-favorite-game/${gameCode}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user-controller
     * @name DeleteUserDocument
     * @request DELETE:/api/users/documents/{id}
     */
    deleteUserDocument: (id: string, params: RequestParams = {}) =>
      this.request<void, ApiErrorDto>({
        path: `/api/users/documents/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  tournamentController = {
    /**
     * No description
     *
     * @tags tournament-controller
     * @name TournamentInfo
     * @request GET:/api/tournaments/{id}
     */
    tournamentInfo: (id: string, params: RequestParams = {}) =>
      this.request<TournamentModel, ApiErrorDto>({
        path: `/api/tournaments/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tournament-controller
     * @name JoinTournament
     * @request POST:/api/tournaments/{id}
     */
    joinTournament: (id: string, params: RequestParams = {}) =>
      this.request<TournamentModel, ApiErrorDto>({
        path: `/api/tournaments/${id}`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tournament-controller
     * @name Tournaments
     * @request GET:/api/tournaments
     */
    tournaments: (params: RequestParams = {}) =>
      this.request<TournamentModel[], ApiErrorDto>({
        path: `/api/tournaments`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tournament-controller
     * @name TournamentInfoForGame
     * @request GET:/api/tournaments/for-game/{game}
     */
    tournamentInfoForGame: (game: string, params: RequestParams = {}) =>
      this.request<TournamentSimpleModel, ApiErrorDto>({
        path: `/api/tournaments/for-game/${game}`,
        method: "GET",
        ...params,
      }),
  };
  userSurveyController = {
    /**
     * No description
     *
     * @tags user-survey-controller
     * @name AddAnswer
     * @request POST:/api/surveys/answer
     */
    addAnswer: (data: UserAnswerDto, params: RequestParams = {}) =>
      this.request<void, ApiErrorDto>({
        path: `/api/surveys/answer`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  paymentController = {
    /**
     * No description
     *
     * @tags payment-controller
     * @name PayOutConfig
     * @request GET:/api/payments/pay-out
     */
    payOutConfig: (params: RequestParams = {}) =>
      this.request<PaymentOutConfigModel, ApiErrorDto>({
        path: `/api/payments/pay-out`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags payment-controller
     * @name PayOut
     * @request POST:/api/payments/pay-out
     */
    payOut: (data: PayOutRequestModel, params: RequestParams = {}) =>
      this.request<FirebaseToken, ApiErrorDto>({
        path: `/api/payments/pay-out`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags payment-controller
     * @name PayInConfig
     * @request GET:/api/payments/pay-in
     */
    payInConfig: (params: RequestParams = {}) =>
      this.request<PaymentInConfigModel, ApiErrorDto>({
        path: `/api/payments/pay-in`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags payment-controller
     * @name PayIn
     * @request POST:/api/payments/pay-in
     */
    payIn: (data: PayInRequestModel, params: RequestParams = {}) =>
      this.request<PayInResponseModel, ApiErrorDto>({
        path: `/api/payments/pay-in`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags payment-controller
     * @name DisableCard
     * @request POST:/api/payments/disable-card
     */
    disableCard: (data: BankCardModel, params: RequestParams = {}) =>
      this.request<void, ApiErrorDto>({
        path: `/api/payments/disable-card`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags payment-controller
     * @name CheckPayOutCard
     * @request POST:/api/payments/check-pay-out-card
     */
    checkPayOutCard: (data: CheckPayOutCardRequestModel, params: RequestParams = {}) =>
      this.request<CheckPayOutCardModel, ApiErrorDto>({
        path: `/api/payments/check-pay-out-card`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags payment-controller
     * @name CancelPayOut
     * @request POST:/api/payments/cancel-pay-out/{orderId}
     */
    cancelPayOut: (orderId: string, params: RequestParams = {}) =>
      this.request<FirebaseToken, ApiErrorDto>({
        path: `/api/payments/cancel-pay-out/${orderId}`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags payment-controller
     * @name PaymentHistory
     * @request GET:/api/payments/history
     */
    paymentHistory: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<OrderHistoryModel[], ApiErrorDto>({
        path: `/api/payments/history`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  metaDataController = {
    /**
     * No description
     *
     * @tags meta-data-controller
     * @name FindMetaData
     * @request POST:/api/page-meta-data
     */
    findMetaData: (data: MetaDataRequest, params: RequestParams = {}) =>
      this.request<MetaDataModel, ApiErrorDto>({
        path: `/api/page-meta-data`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  nominationsController = {
    /**
     * No description
     *
     * @tags nominations-controller
     * @name SetActive
     * @request POST:/api/nominations/{nominationId}/set-active
     */
    setActive: (nominationId: string, params: RequestParams = {}) =>
      this.request<string, ApiErrorDto>({
        path: `/api/nominations/${nominationId}/set-active`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags nominations-controller
     * @name Nominations
     * @request GET:/api/nominations
     */
    nominations: (params: RequestParams = {}) =>
      this.request<NominationModel[], ApiErrorDto>({
        path: `/api/nominations`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags nominations-controller
     * @name NominationsByUser
     * @request GET:/api/nominations/{userId}/by-user
     */
    nominationsByUser: (userId: string, params: RequestParams = {}) =>
      this.request<NominationModel[], ApiErrorDto>({
        path: `/api/nominations/${userId}/by-user`,
        method: "GET",
        ...params,
      }),
  };
  lotteryController = {
    /**
     * No description
     *
     * @tags lottery-controller
     * @name SetActiveUserLottery
     * @request POST:/api/lottery/{userLotteryId}/set-active
     */
    setActiveUserLottery: (userLotteryId: string, params: RequestParams = {}) =>
      this.request<void, ApiErrorDto>({
        path: `/api/lottery/${userLotteryId}/set-active`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags lottery-controller
     * @name Lotteries
     * @request GET:/api/lottery
     */
    lotteries: (params: RequestParams = {}) =>
      this.request<LotteryModel[], ApiErrorDto>({
        path: `/api/lottery`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags lottery-controller
     * @name TicketsCount
     * @request GET:/api/lottery/tickets-count
     */
    ticketsCount: (
      query: {
        deposit: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<FeatureTicketsModel[], ApiErrorDto>({
        path: `/api/lottery/tickets-count`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  innerTestDataController = {
    /**
     * No description
     *
     * @tags inner-test-data-controller
     * @name CreateUser
     * @summary Создать пользователя
     * @request POST:/api/inner/test/data/user
     */
    createUser: (
      query: {
        /** Идентификатор пользователя */
        userId: string;
        /**
         * Почта пользователя, должна быть заполнена если нет телефона
         * @default ""
         */
        email?: string;
        /**
         * Признак верификации почты
         * @default false
         */
        verifyEmail?: boolean;
        /**
         * Телефон пользователя, должен быть заполнен если нет почты
         * @default ""
         */
        phone?: string;
        /** Пароль пользователя */
        password: string;
        /**
         * Признак верификации пользователя
         * @default false
         */
        verified?: boolean;
        /**
         * Признак верификации телефона
         * @default false
         */
        verifyPhone?: boolean;
        /**
         * Основной баланс пользователя
         * @default 100
         */
        balance?: number;
        /** @default "UA" */
        region?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<boolean, ApiErrorDto>({
        path: `/api/inner/test/data/user`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags inner-test-data-controller
     * @name CreateBonus
     * @summary Создать бонус
     * @request POST:/api/inner/test/data/bonus
     */
    createBonus: (
      query: {
        /** Идентификатор бонуса */
        bonusId?: string;
        /** Название бонуса */
        bonusName: string;
        /** Код бонуса */
        code: string;
        /** Тип бонуса */
        bonusType: "PERCENT_ON_DEPOSIT" | "FIXED" | "NON_DEPOSIT" | "GIFT_SPINS";
        /**
         * Период активации
         * @format int32
         * @default 72
         */
        periodActivation?: number;
        /**
         * Процент на депозит
         * @format double
         * @default 100
         */
        percent?: number;
        /**
         * Коэффициент вейджера
         * @format int32
         * @default 2
         */
        wagerFactor?: number;
        /**
         * Минимальный депозит
         * @default 50
         */
        minDeposit?: number;
        /**
         * Максимальный депозит
         * @default 5000
         */
        maxDeposit?: number;
        /**
         * Игра(только для гифт спинов)
         * @default "bookofra"
         */
        giftGame?: string;
        /**
         * Размер бонуса, грн или кол-во гифт спинов если гифт спины
         * @default 50
         */
        bonusSize?: number;
        /**
         * Ставка в игре(если гифт спины)
         * @format int32
         * @default 1
         */
        giftBet?: number;
        /**
         * Линия в игре(если гифт спины)
         * @format int32
         * @default 9
         */
        giftLine?: number;
        /** Промо-коды */
        promoCodes?: string[];
        /**
         * Регион
         * @default "UA"
         */
        region?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<boolean, ApiErrorDto>({
        path: `/api/inner/test/data/bonus`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags inner-test-data-controller
     * @name UserInfo
     * @summary Получить информацию о пользователе
     * @request GET:/api/inner/test/data/user/{id}
     */
    userInfo: (id: string, params: RequestParams = {}) =>
      this.request<Record<string, object>, ApiErrorDto>({
        path: `/api/inner/test/data/user/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags inner-test-data-controller
     * @name DeleteUser
     * @summary Удалить пользователя
     * @request DELETE:/api/inner/test/data/user/{id}
     */
    deleteUser: (id: string, params: RequestParams = {}) =>
      this.request<boolean, ApiErrorDto>({
        path: `/api/inner/test/data/user/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags inner-test-data-controller
     * @name CodeForResetPassword
     * @summary Получить токен пользователя для верификации почты или телефона или сброса пароля
     * @request GET:/api/inner/test/data/token
     */
    codeForResetPassword: (
      query?: {
        /** Телефон если верификация телефона */
        phone?: string;
        /** Почта если верификация почты */
        email?: string;
        /** Пароль если восстановеление пароля */
        password?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, ApiErrorDto>({
        path: `/api/inner/test/data/token`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags inner-test-data-controller
     * @name DeleteActiveUserBonus
     * @summary Удалить активный бонус у пользователя
     * @request DELETE:/api/inner/test/data/user/active-bonus/{id}
     */
    deleteActiveUserBonus: (id: string, params: RequestParams = {}) =>
      this.request<boolean, ApiErrorDto>({
        path: `/api/inner/test/data/user/active-bonus/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags inner-test-data-controller
     * @name DeleteBonus
     * @summary Удалить бонус
     * @request DELETE:/api/inner/test/data/bonus/{id}
     */
    deleteBonus: (id: string, params: RequestParams = {}) =>
      this.request<boolean, ApiErrorDto>({
        path: `/api/inner/test/data/bonus/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  gameController = {
    /**
     * No description
     *
     * @tags game-controller
     * @name BuyGameBonus
     * @request POST:/api/games/buy-bonus
     */
    buyGameBonus: (data: BuyGameBonusModel, params: RequestParams = {}) =>
      this.request<void, ApiErrorDto>({
        path: `/api/games/buy-bonus`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags game-controller
     * @name GetSession
     * @request GET:/api/games/session
     */
    getSession: (
      query: {
        demo: boolean;
        game: string;
        lang?: string;
        /** @default "UA" */
        region?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, ApiErrorDto>({
        path: `/api/games/session`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags game-controller
     * @name ServerConfig
     * @request GET:/api/games/server-config.json
     */
    serverConfig: (
      query: {
        params: Record<string, object>;
      },
      params: RequestParams = {},
    ) =>
      this.request<Record<string, object>, ApiErrorDto>({
        path: `/api/games/server-config.json`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  boxController = {
    /**
     * No description
     *
     * @tags box-controller
     * @name OpenBox
     * @request POST:/api/boxes/{boxId}
     */
    openBox: (boxId: string, params: RequestParams = {}) =>
      this.request<UserBoxModel, ApiErrorDto>({
        path: `/api/boxes/${boxId}`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags box-controller
     * @name UserBoxes
     * @request GET:/api/boxes
     */
    userBoxes: (params: RequestParams = {}) =>
      this.request<UserBoxModel[], ApiErrorDto>({
        path: `/api/boxes`,
        method: "GET",
        ...params,
      }),
  };
  bonusController = {
    /**
     * No description
     *
     * @tags bonus-controller
     * @name UpdateSeenBonus
     * @request POST:/api/bonuses/update-seen
     */
    updateSeenBonus: (data: string[], params: RequestParams = {}) =>
      this.request<BonusModel[], ApiErrorDto>({
        path: `/api/bonuses/update-seen`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags bonus-controller
     * @name OpenNextBonusGift
     * @request POST:/api/bonuses/open-gift
     */
    openNextBonusGift: (params: RequestParams = {}) =>
      this.request<BonusModel, ApiErrorDto>({
        path: `/api/bonuses/open-gift`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bonus-controller
     * @name OpenChristmasGift
     * @request POST:/api/bonuses/open-christmas-gift
     */
    openChristmasGift: (params: RequestParams = {}) =>
      this.request<BonusModel, ApiErrorDto>({
        path: `/api/bonuses/open-christmas-gift`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bonus-controller
     * @name CancelBonus
     * @request POST:/api/bonuses/cancel/{userBonusId}
     */
    cancelBonus: (userBonusId: string, params: RequestParams = {}) =>
      this.request<number, ApiErrorDto>({
        path: `/api/bonuses/cancel/${userBonusId}`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bonus-controller
     * @name BuyBonus
     * @request POST:/api/bonuses/buy
     */
    buyBonus: (data: BuyBonusRequestModel, params: RequestParams = {}) =>
      this.request<BonusModel, ApiErrorDto>({
        path: `/api/bonuses/buy`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags bonus-controller
     * @name AssignBonus
     * @request POST:/api/bonuses/assign/{promo-code}
     */
    assignBonus: (
      promoCode: string,
      query?: {
        withRegistered?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<BonusModel, ApiErrorDto>({
        path: `/api/bonuses/assign/${promoCode}`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags bonus-controller
     * @name ActivateBonus
     * @request POST:/api/bonuses/activate/{code}
     */
    activateBonus: (code: string, params: RequestParams = {}) =>
      this.request<BonusModel, ApiErrorDto>({
        path: `/api/bonuses/activate/${code}`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bonus-controller
     * @name Bonuses
     * @request GET:/api/bonuses
     */
    bonuses: (params: RequestParams = {}) =>
      this.request<BonusModel[], ApiErrorDto>({
        path: `/api/bonuses`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bonus-controller
     * @name BonusGifts
     * @request GET:/api/bonuses/gifts
     */
    bonusGifts: (params: RequestParams = {}) =>
      this.request<UserBonusGiftModel, ApiErrorDto>({
        path: `/api/bonuses/gifts`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bonus-controller
     * @name CheckByCode
     * @request GET:/api/bonuses/check/{code}
     */
    checkByCode: (code: string, params: RequestParams = {}) =>
      this.request<boolean, ApiErrorDto>({
        path: `/api/bonuses/check/${code}`,
        method: "GET",
        ...params,
      }),
  };
  siteMapController = {
    /**
     * No description
     *
     * @tags site-map-controller
     * @name GameSiteMap
     * @request GET:/sitemap.xml
     */
    gameSiteMap: (params: RequestParams = {}) =>
      this.request<string, ApiErrorDto>({
        path: `/sitemap.xml`,
        method: "GET",
        ...params,
      }),
  };
  promotionControllerV2 = {
    /**
     * No description
     *
     * @tags promotion-controller-v-2
     * @name GetPromotionsV2
     * @request GET:/api/promotions/v2
     */
    getPromotionsV2: (params: RequestParams = {}) =>
      this.request<PromotionV2Model[], ApiErrorDto>({
        path: `/api/promotions/v2`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags promotion-controller-v-2
     * @name GetPromotionsV21
     * @request GET:/api/promotions/v2/{id}
     */
    getPromotionsV21: (id: string, params: RequestParams = {}) =>
      this.request<PromotionV2Model, ApiErrorDto>({
        path: `/api/promotions/v2/${id}`,
        method: "GET",
        ...params,
      }),
  };
  jackpotController = {
    /**
     * No description
     *
     * @tags jackpot-controller
     * @name GetWinners
     * @request GET:/api/jackpots/{type}/winners
     */
    getWinners: (
      type: string,
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 20
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<JackpotWinnerModel[], ApiErrorDto>({
        path: `/api/jackpots/${type}/winners`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  contentController = {
    /**
     * No description
     *
     * @tags content-controller
     * @name FindContent
     * @request GET:/api/contents/{view}
     */
    findContent: (view: string, params: RequestParams = {}) =>
      this.request<ContentModel, ApiErrorDto>({
        path: `/api/contents/${view}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags content-controller
     * @name MenuItems
     * @request GET:/api/contents/menu-items
     */
    menuItems: (params: RequestParams = {}) =>
      this.request<ContentMenuModel[], ApiErrorDto>({
        path: `/api/contents/menu-items`,
        method: "GET",
        ...params,
      }),
  };
  applicationController = {
    /**
     * No description
     *
     * @tags application-controller
     * @name GetApplicationInfo
     * @request GET:/api/app
     */
    getApplicationInfo: (params: RequestParams = {}) =>
      this.request<ApplicationModel, ApiErrorDto>({
        path: `/api/app`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags application-controller
     * @name GetConfigs
     * @request GET:/api/app/site-configs
     */
    getConfigs: (params: RequestParams = {}) =>
      this.request<SiteConfigs, ApiErrorDto>({
        path: `/api/app/site-configs`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags application-controller
     * @name RegistrationConfigs
     * @request GET:/api/app/registration-configs
     */
    registrationConfigs: (params: RequestParams = {}) =>
      this.request<RegistrationByRegionConfigs, ApiErrorDto>({
        path: `/api/app/registration-configs`,
        method: "GET",
        ...params,
      }),
  };
  achievementsController = {
    /**
     * No description
     *
     * @tags achievements-controller
     * @name MyAchievements
     * @request GET:/api/achievements
     */
    myAchievements: (params: RequestParams = {}) =>
      this.request<AchievementsModel, ApiErrorDto>({
        path: `/api/achievements`,
        method: "GET",
        ...params,
      }),
  };
}
