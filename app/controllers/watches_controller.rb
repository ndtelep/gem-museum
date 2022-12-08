class WatchesController < ApplicationController
  skip_before_action :authorized_user

  # GET /watches
  def index
    if params[:user_id]
      watched_items = User.find(params[:user_id]).watched_items
      render json: watched_items
    else
      watches = Watch.all
      render json: watches
    end
  end

  # GET /watches/1
  def show
    render json: @watch
  end

  # POST /watches
  def create
    @watch = Watch.new(watch_params)

    if @watch.save
      render json: @watch, status: :created, location: @watch
    else
      render json: @watch.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /watches/1
  def update
    if @watch.update(watch_params)
      render json: @watch
    else
      render json: @watch.errors, status: :unprocessable_entity
    end
  end

  # DELETE /watches/1
  def destroy
    @watch.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_watch
      @watch = Watch.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def watch_params
      params.require(:watch).permit(:user_id, :item_id)
    end
end
