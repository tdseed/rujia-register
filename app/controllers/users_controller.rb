class UsersController < ApplicationController

  # skip_before_filter :verify_authenticity_token, :only => :create]
  protect_from_forgery with: :null_session
  before_action :js_params

  def new
    @user = User.new
    respond_to do |format|
      format.html
      format.json { render json: @user}
    end
  end

  def success

  end

  def create
    # @user = User.new params.require(:user).permit(:name, :phone)
    # respond_to do |format|
    #   if @user.save
    #     format.html { redirect_to :action => "success" }
    #     format.json { render json: @user, status: :created, location: @user }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @user.errors }
    #   end
    # end

    @user = User.new params.require(:user).permit(:name, :phone)
    if @user.save
      redirect_to :action => "success"
    else
      render :new
    end

  end

  def check_phone
    respond_to do |format|
      format.json do
        render json: User.where('phone = ?', params[:user][:phone]).first.nil?
      end
    end
  end

  private
  def js_params
    gon.userPostPath = users_path
    gon.userOverPath = success_path
    gon.userCheckPhonePath = check_phone_users_path
  end
end
