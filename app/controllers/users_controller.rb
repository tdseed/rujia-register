class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new params.require(:user).permit(:name, :phone)
    if @user.save
      redirect_to "http://www.baidu.com"
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

end
