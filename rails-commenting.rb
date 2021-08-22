# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Controller to retrieve data from the BlogPost model. Utilizes the REST API principles
class BlogPostsController < ApplicationController
  def index
    # ---2) Index uses Active Record to return a collection of all blog posts and saves it to an instance variable, @posts.
    @posts = BlogPost.all
  end

  def show
    # ---3) Active Record queries the database to find the BlogPost with the id given in params.
    @post = BlogPost.find(params[:id])
  end

  # ---4) Instantiates a new Post object and saves it to @post instance variable.
  def new
    @post = Post.new
  end

  def create
    # ---5) Creates and saves a new record in the db. blog_post_params is called to require and permit the title and content attributes. If @post is valid, then the page redirects to the new blog post, otherwise it stays on the create page.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) Returns the blog post with the matching primary key
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The Active Record object was retrieved and its attributes are updated. If the object is valid then the page redirects to the updated post, otherwise it stays on the edit page.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) Redirects back to the blog post if the post was not destroyed.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Private methods used for this class. Methods defined below private are only accessible from within BlogPostsController
  private
  def blog_post_params
    # ---10) Allows us to choose the title and content attributes to update in the db and permits them being exposed. blog_post parameters are required.
    params.require(:blog_post).permit(:title, :content)
  end
end
