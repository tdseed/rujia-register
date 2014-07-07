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

  def new2

  end

  def ajax_get
    # @user = User.new params.require(:user).permit(:name, :phone)
    # respond_to do |format|
    #   if @user.save
    #     format.html { redirect_to '/over' }
    #     format.json { render json: @user, status: :created, location: @user }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @user.errors }
    #   end
    # end
    @user = User.new
    @user.name = params[:name]
    @user.phone = params[:phone]
    if @user.save
      redirect_to '/over'
    else
      render :new
    end
  end

  def check_phone
    respond_to do |format|
      format.json do
        render json: User.where('phone = ?', params[:phone]).first.nil?
      end
    end
  end

  private
  def js_params
    gon.userPostPath = users_path
    gon.userOverPath = over_path
  end
end
